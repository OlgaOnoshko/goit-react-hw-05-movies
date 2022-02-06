import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMovieReviews } from "../Services/MoviesApi";

function MovieReviewPage() {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      setLoading(true);
      try {
        const data = await GetMovieReviews(movieID);
        setReviews(data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieID]);

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>There's no reviews for this movie</p>
        )}
      </ul>
    </>
  );
}

export default MovieReviewPage;
