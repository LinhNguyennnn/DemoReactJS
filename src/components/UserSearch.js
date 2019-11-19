import React, { useState, useCallback } from "react";

const UserSearch = ({ onSearch }) => {
  const [Username, setUsername] = useState("");
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSearch(Username);
    },
    [Username, onSearch]
  );

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={Username}
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserSearch;
