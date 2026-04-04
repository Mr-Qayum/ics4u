export type GridData = {
  id: number;
  imagePath: string | null;
  primaryText: string;
  secondaryText?: string;
};

export type MovieResponse = {
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  total_pages: number;
};
