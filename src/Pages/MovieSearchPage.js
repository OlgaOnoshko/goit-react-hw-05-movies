import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./MovieSearchForm";
import { GetMoviesBySearchQuery } from "../Services/MoviesApi";

function MovieSearchPage() {
  const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchField === "") {
      return;
    }
    async function searchMovies() {
      setLoading(true);
      try {
        const data = await GetMoviesBySearchQuery(searchField);
        setMovies(data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [searchField]);

  const handleFormSubmit = (searchField) => {
    setSearchField(searchField);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearchPage;
