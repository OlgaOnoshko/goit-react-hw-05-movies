import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Searchbar from "../../Components/MovieSearchForm";
import { GetMoviesBySearchQuery } from "../../Services/MoviesApi";

function MovieSearchPage() {
  // const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      async function searchMovies() {
        try {
          const data = await GetMoviesBySearchQuery(query);
          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
      }
      searchMovies();
    }
  }, [query]);

  return (
    <div>
      <Searchbar />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearchPage;
