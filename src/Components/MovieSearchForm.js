import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function Searchbar() {
  const [searchField, setsearchField] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    setsearchField(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchField.trim() === "") {
      alert("Enter search term");
      return;
    }

    setSearchParams({ query: event.currentTarget.elements.query.value });
    setsearchField("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search movies here"
          value={searchField}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

export default Searchbar;
