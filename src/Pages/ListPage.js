import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetTrendingMovies } from "../Services/MoviesApi";

function ListPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await GetTrendingMovies();
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`}>{result.original_title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListPage;
