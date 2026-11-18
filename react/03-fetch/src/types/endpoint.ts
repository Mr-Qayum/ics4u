export type Country = {
    name: string;
    flags: {
        svg: string;
    };
    capital?: string;
    region: string;
    subregion: string;
    population: number;
    languages: Array<{
        name: string;
    }>;
    area: number;
}