import React, { useState } from "react";
import UserSearch from "./components/UserSearch";
import ReposList from "./components/ReposList";

const Search = () => {
  const [currentUsername, setCurrentUsername] = useState(null);
  return (
    <div>
      <UserSearch onSearch={setCurrentUsername} />
      <ReposList currentUsername={currentUsername} />
    </div>
  );
};

export default Search;
