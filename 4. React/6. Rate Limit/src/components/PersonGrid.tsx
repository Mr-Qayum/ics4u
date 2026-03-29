import type { Person } from "../App";

type PersonGridProps = {
  results: Person[];
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const PersonGrid = ({ results }: PersonGridProps) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {results.map((person) => (
          <div
            key={person.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md
                       hover:shadow-xl hover:scale-[1.03] transition duration-300"
          >
            <div className="aspect-[2/3] bg-gray-700">
              {person.profile_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${person.profile_path}`}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            <div className="p-3">
              <p className="text-sm font-semibold truncate">{person.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
