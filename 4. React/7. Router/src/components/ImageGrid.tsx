import { IMAGE_BASE_URL } from '@/core/constants';
import type { GridData } from '@/core/types';
import { Link } from 'react-router-dom';

type ImageGridProps = {
  results: GridData[] | null;
  getHref: (id: number) => string;
};

export const ImageGrid = ({ results, getHref }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-5">
      {results?.map((result) => (
        <Link key={result.id} to={getHref(result.id)} className="block bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition">
          <img className="w-full h-[280px] object-cover" src={`${IMAGE_BASE_URL}${result.imagePath}`} />
          <div className="p-3 text-center">
            <p className="text-sm font-semibold truncate">{result.primaryText}</p>
            {result.secondaryText && <p className="text-gray-400 text-xs">{result.secondaryText}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
};
