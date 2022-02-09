import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMovieCast } from "../../Services/MoviesApi";
import noImage from "../../pictures/no-image.png";

function MovieCastPage() {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await GetMovieCast(movieID);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieID]);

  return (
    <>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                  : noImage
              }
              alt={item.name}
              width="70"
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCastPage;
