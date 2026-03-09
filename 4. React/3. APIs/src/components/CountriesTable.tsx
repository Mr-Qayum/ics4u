import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Country = {
  name: { common: string };
  flags: { png: string };
};

type CountryDetails = {
  name: { common: string };
  capital?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  languages?: Record<string, string>;
};

export const CountriesTable: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryDetails | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const url = "https://restcountries.com/v3.1/all?fields=name,flags";

  const fetchCountries = async () => {
    const res = await fetch(url);
    const data: Country[] = await res.json();
    const sorted = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common),
    );
    setCountries(sorted);
    setLoading(false);
  };

  const fetchCountryDetails = async (name: string) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    );
    setSelectedCountry(res.data[0]);

    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  return (
    <div className="p-6">
      {selectedCountry && (
        <div
          ref={detailsRef}
          className="mb-6 max-w-md mx-auto border p-4 shadow"
        >
          <h2 className="text-xl font-bold mb-2">
            {selectedCountry.name.common}
          </h2>
          <p>
            <strong>Capital:</strong> {selectedCountry.capital?.[0] ?? "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {selectedCountry.region}
          </p>
          <p>
            <strong>Subregion:</strong> {selectedCountry.subregion}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {selectedCountry.population?.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {selectedCountry.languages
              ? Object.values(selectedCountry.languages).join(", ")
              : "N/A"}
          </p>
        </div>
      )}

      <table className="border-collapse border border-gray-300 shadow-lg mx-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Flag</th>
            <th className="border px-4 py-2 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr
              key={country.name.common}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => fetchCountryDetails(country.name.common)}
            >
              <td className="border px-4 py-2">
                <img
                  src={country.flags.png}
                  width={40}
                  alt={country.name.common}
                />
              </td>
              <td className="border px-4 py-2">{country.name.common}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
