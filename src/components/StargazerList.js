import React, { useState, useEffect, useCallback } from "react";
import GetStargazerList from "../Services/GetStargazerList";

const StargazerList = ({ repos }) => {
  const [stargazers, setStagazers] = useState(null);
  const [pageStargazer, setPageStargazer] = useState(1);
  const handleClick = useCallback(async () => {
    setPageStargazer(1);
    setStagazers(await GetStargazerList(repos.full_name, pageStargazer));
  }, [repos.full_name]);
  useEffect(() => {
    async function fetchStargazer() {
      const data = await GetStargazerList(repos.full_name, pageStargazer);
      if (pageStargazer > 1) {
        setStagazers([...stargazers, ...data]);
      }
    }
    fetchStargazer();
  }, [pageStargazer]);
  return (
    <div style={{ display: "inline" }}>
      <i className="fa fa-star" onClick={handleClick}></i>
      {stargazers ? (
        <ul>
          {stargazers &&
            stargazers.map((star, i) => <li key={i}>{star.login}</li>)}
          {stargazers ? (
            <p>{stargazers.length + "/" + repos.stargazers_count}</p>
          ) : null}
          {repos.stargazers_count &&
          repos.stargazers_count >= 30 &&
          stargazers.length < repos.stargazers_count ? (
            <button
              onClick={() => {
                setPageStargazer(pageStargazer + 1);
              }}
            >
              Load More
            </button>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
};

export default StargazerList;
