import { Pagination } from "./Pagination";

type Person = {
  id: number;
  name: string;
  profile_path: string | null;
};

type Props = {
  results: Person[];
  page: number;
  maxPages: number;
  onPageChange: (page: number) => void;
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export const PeopleGrid = ({
  results,
  page,
  maxPages,
  onPageChange,
}: Props) => {
  return (
    <>
      <Pagination page={page} maxPages={maxPages} onPageChange={onPageChange} />

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md">
        {results.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl shadow p-3 text-center"
          >
            {person.profile_path ? (
              <img
                src={`${IMAGE_BASE_URL}${person.profile_path}`}
                alt={person.name}
                className="w-full h-40 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}

            <p className="mt-2 font-medium text-gray-800">{person.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
