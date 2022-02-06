import { useState } from "react";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [searchField, setsearchField] = useState("");

  const handleSearch = (event) => {
    setsearchField(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchField.trim() === "") {
      alert("Enter search term");
      return;
    }

    onSubmit(searchField);
    setsearchField("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleSubmit}>
          Search
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies here"
          value={searchField}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
