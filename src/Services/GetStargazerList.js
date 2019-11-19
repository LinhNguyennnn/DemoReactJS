import axios from "axios";
const GetStargazerList = (full_name, pageStargazer) => {
  const data = axios
    .get(
      `https://api.github.com/repos/${full_name}/stargazers?page=${pageStargazer}&client_id=4931fa51f0fd5a34ae4b&client_secret=17f4d129f615170d5c645ad460cc83e7f0eb5a17`
    )
    .then(res => res.data)
    .catch(error => console.log(error));
  return data;
};
export default GetStargazerList;
