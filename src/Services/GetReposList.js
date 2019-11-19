import axios from "axios";
const GetReposList = (username, page) => {
  const repos = axios
    .get(
      `https://api.github.com/users/${username}/repos?page=${page}&client_id=4931fa51f0fd5a34ae4b&client_secret=17f4d129f615170d5c645ad460cc83e7f0eb5a17`
    )
    .then(res => res.data)
    .catch(error => console.log(error));
  const totalRepos = axios
    .get(
      `https://api.github.com/users/${username}?client_id=4931fa51f0fd5a34ae4b&client_secret=17f4d129f615170d5c645ad460cc83e7f0eb5a17`
    )
    .then(res => res.data)
    .catch(error => console.log(error));
  return { repos, totalRepos };
};

export default GetReposList;
