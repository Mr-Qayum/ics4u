import { API_KEY, MOVIE_ENDPOINT } from '@/core/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Review = {
  id: string;
  author: string;
  content: string;
};

type ReviewsResponse = {
  results: Review[];
};

export const ReviewsView = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getReviews = async () => {
      setLoading(true);

      try {
        const res = await axios.get<ReviewsResponse>(`${MOVIE_ENDPOINT}/${id}/reviews`, {
          params: { api_key: API_KEY },
          signal: controller.signal,
        });

        setReviews(res.data.results);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reviews</h2>
      {reviews?.slice(0, 5).map((review) => (
        <div key={review.id} className="bg-gray-800 p-5 rounded-xl shadow">
          <p className="text-sm text-gray-400 mb-2">By {review.author}</p>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">{review.content}</p>
        </div>
      ))}
    </div>
  );
};
