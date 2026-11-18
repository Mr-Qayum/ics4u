import axios from "axios";
import { useEffect, useState } from "react";
import type { Country } from "./types";
import { DetailItem, Modal, Table } from "./components";
import { COUNTRIES_ENDPOINT } from "./constants";

const ITEMS_PER_COLUMN = 50;

export const App = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<Country[]>(COUNTRIES_ENDPOINT, {
          params: {
            full: true,
            sort: "name"
          }
        })
        setCountries(response.data);
      } catch (error) {
        console.error(`${(error as Error).message} Failed to fetch countries`);
      }
    })();
  }, [])

  const countryColumns: Country[][] = countries
    ? Array.from({ length: Math.ceil(countries.length / ITEMS_PER_COLUMN) }, (_, i) =>
      countries.slice(i * ITEMS_PER_COLUMN, (i + 1) * ITEMS_PER_COLUMN),
    )
    : [];

  if (!countries) {
    return <p className="mt-10 text-center text-gray-200 text-lg">Loading...</p>;
  }

  return (
    <main className="flex min-h-screen justify-center bg-zinc-950 p-6 text-zinc-100 antialiased">
      <div className="flex w-full max-w-7xl flex-col items-center gap-12">
        <header className="w-full text-center">
          <h1 className="font-extrabold text-5xl text-cyan-400 tracking-tighter">REST Countries</h1>
          <p className="mt-2 text-lg text-zinc-400">Browse countries of the world by page</p>
        </header>
        <div className="grid w-full grid-cols-5 items-start gap-6">
          {
            countryColumns.map((countryColumns) => (
              <Table headers={["Flag", "Country"]}>
                {countryColumns.map((c) => (
                  <tr className="cursor-pointer rounded-xl transition duration-150 hover:bg-zinc-800/60"
                    key={c.name}
                    onClick={() => setCountry(c)}
                  >
                    <td className="px-5 py-3 align-middle">
                      <img className="h-auto w-12 rounded-lg shadow-md ring-1 ring-zinc-700" alt={c.name} src={c.flags.svg} /></td>
                    <td className="max-w-40 truncate px-5 py-3 align-middle font-medium text-zinc-200">{c.name}</td>
                  </tr>
                ))
                }
              </Table>
            ))}
        </div>
      </div>
      {country &&
        <Modal onClick={() => setCountry(null)}>
          <div className="flex flex-col gap-8 p-10">
            <div className="flex items-center gap-6 border-zinc-800 border-b pb-8">
              <img alt={country.name} className="h-auto w-20 rounded-xl shadow-lg ring-2 ring-cyan-700" src={country.flags.svg} />
              <h2 className="font-extrabold text-4xl text-white tracking-tight">{country.name}</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              <DetailItem label="Capital" value={country.capital ?? "N/A"} />
              <DetailItem label="Languages" value={country.languages.map((lang) => lang.name).join(", ") ?? "N/A"} />
              <DetailItem label="Region" value={country.region} />
              <DetailItem label="Subregion" value={country.subregion} />
              <DetailItem label="Area" value={`${country.area.toLocaleString()} km²`} />
              <DetailItem label="Population" value={`${country.population.toLocaleString()}`} />
            </div>
          </div>
        </Modal>}
    </main >
  )
}
