import { useState, type SyntheticEvent } from "react"
import { NumberInput, TextInput } from "./components"
import type { Results } from "./types";
import { solveQuadratic } from "./utils";

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [results, setResults] = useState<Results | null>(null);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(solveQuadratic(a, b, c));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl">
        <h1 className="mb-4 text-center font-bold text-3xl">Quadratic Solver</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <NumberInput label="a-value" value={a} setValue={setA} />
          <NumberInput label="b-value" value={b} setValue={setB} />
          <NumberInput label="c-value" value={c} setValue={setC} />
          <TextInput color="text-green-300" label="Roots:" value={results?.roots ?? "N/A"} />
          <TextInput color="text-yellow-300" label="Discriminant:" value={results?.discriminant ?? "N/A"} />
          <TextInput color="text-blue-300" label="Number of Roots:" value={results?.type ?? "N/A"} />
          <TextInput color="text-purple-300" label="Vertex:" value={results?.vertex ?? "N/A"} />
          <TextInput color="text-pink-300" label="Axis of Symmetry:" value={results?.axis ?? "N/A"} />
          <input className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500" type="submit" value="Calculate" />
        </form>
      </div>
    </div>
  )
}
