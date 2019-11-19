import React, { useState, useEffect } from "react";
import GetReposList from "../Services/GetReposList";
import StargazerList from "./StargazerList";

const ReposList = ({ currentUsername }) => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState(null);
  const [page, setPage] = useState(1);
  const [totalRepos, setTotalRepos] = useState(0);
  useEffect(() => {
    async function fetchData() {
      if (currentUsername) {
        if (page > 1 && currentUsername === username) {
          const data = GetReposList(currentUsername, page);
          setRepos(
            page < 2
              ? await data.repos.then(data => data)
              : [...repos, ...(await data.repos.then(data => data))]
          );
          setTotalRepos(await data.totalRepos.then(data => data.public_repos));
        } else {
          setUsername(currentUsername);
          const data = GetReposList(currentUsername, 1);
          setRepos(await data.repos.then(data => data));
          setTotalRepos(await data.totalRepos.then(data => data.public_repos));
        }
      }
    }
    fetchData();
  }, [currentUsername, page]);
  return (
    <div>
      {
        <ul>
          {repos &&
            repos.map(repo => (
              <li key={repo.id}>
                {repo.name}
                {repo.stargazers_count && repo.stargazers_count > 0 ? (
                  <StargazerList repos={repo} />
                ) : null}
              </li>
            ))}
        </ul>
      }
      {totalRepos ? <p>{repos.length + "/" + totalRepos}</p> : null}
      {totalRepos && totalRepos >= 30 && repos.length < totalRepos ? (
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default ReposList;
