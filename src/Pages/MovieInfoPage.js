import { Outlet, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GetMovieInfo } from "../Services/MoviesApi";
import noImage from "../pictures/no-image.png";

function MovieInfoPage() {
  const { movieID } = useParams();
  // console.log(movieID);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieInfo() {
      setLoading(true);
      try {
        const data = await GetMovieInfo(movieID);
        setMovie(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchMovieInfo();
  }, [movieID]);

  return (
    <>
      {movie && (
        <>
          <Link to="/">
            <GoArrowLeft /> Go back
          </Link>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : noImage
            }
            alt={movie.title}
            width="300"
          />
          <h1>
            {movie.original_title} ({movie.release_date?.slice(0, 4)})
          </h1>
          <div>User score: {movie.vote_average * 10}%</div>
          <h2>Overview: </h2>
          <div>{movie.overview}</div>
          <h2>Genres: </h2>
          <ul>
            {movie.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h3>Additional information</h3>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          <Outlet />
        </>
      )}
    </>
  );
}

export default MovieInfoPage;
