import { Button } from '@/components/Button';
import { API_KEY, IMAGE_BASE_URL } from '@/core/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type DetailResponse = {
  id: number;
  name: string;
  biography: string;
  profile_path: string | null;
  known_for_department: string;
};

const ENDPOINT = 'https://api.themoviedb.org/3/person';

export const PersonView = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<DetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getPerson = async () => {
      setLoading(true);

      try {
        const response = await axios.get<DetailResponse>(`${ENDPOINT}/${id}`, {
          params: {
            api_key: API_KEY,
          },
          signal: controller.signal,
        });

        console.log(response.data);
        setPerson(response.data);
      } catch (err) {
        console.error('Failed to fetch person detail', err);
      } finally {
        setLoading(false);
      }
    };

    getPerson();

    return () => controller.abort();
  }, [id]);

  if (loading || !person) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex gap-8">
        <div className="w-[220px] h-[330px] rounded-xl overflow-hidden flex-shrink-0">
          {person.profile_path ? (
            <img src={`${IMAGE_BASE_URL}${person.profile_path}`} alt={person.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-100">No Image</div>
          )}
        </div>
        <div className="space-y-4">
          <Button onClick={() => navigate('/search')}>← Back</Button>
          <h1 className="text-4xl font-bold">{person.name}</h1>
          <p className="text-gray-400">Known for: {person.known_for_department}</p>
          <p className="text-gray-300">{person.biography || 'No biography available.'}</p>
        </div>
      </div>
    </div>
  );
};
