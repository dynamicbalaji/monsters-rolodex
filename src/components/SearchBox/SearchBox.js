import React from "react";

import "./SearchBox.css";

const SearchBox = props => {
  return (
    <input
      type="search"
      placeholder="search monster"
      onChange={props.searchFieldHandler}
      className="search"
    />
  );
};

export default SearchBox;
