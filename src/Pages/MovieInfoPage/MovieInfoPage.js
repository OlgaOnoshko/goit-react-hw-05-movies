import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GetMovieInfo } from "../../Services/MoviesApi";
import noImage from "../../pictures/no-image.png";
import { Wrapper } from "./MovieInfoPage.styled";

function MovieInfoPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    async function fetchMovieInfo() {
      try {
        const data = await GetMovieInfo(movieID);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieInfo();
  }, [movieID]);

  return (
    <>
      {movie && (
        <>
          <Link to={location?.state?.from ?? "/movies"}>
            <GoArrowLeft /> Go back
          </Link>

          <Wrapper>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : noImage
              }
              alt={movie.title}
              width="300"
            />
            <div>
              <h1>
                {movie.original_title} ({movie.release_date?.slice(0, 4)})
              </h1>
              <div>User score: {movie.vote_average * 10}%</div>
              <h2>Overview </h2>
              <div>{movie.overview}</div>
              <h2>Genres </h2>
              <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
            </div>
          </Wrapper>

          <hr />
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link
                to={`/movies/${movie.id}/cast`}
                state={location?.state?.from && { from: location.state.from }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${movie.id}/reviews`}
                state={location?.state?.from && { from: location.state.from }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}

export default MovieInfoPage;
