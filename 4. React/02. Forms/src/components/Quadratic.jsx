import { useState } from 'react';
import './Quadratic.css'

function Quadratic() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState("Press Calculate!");

  function quadraticFormula(event) {
    event.preventDefault();
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      setResult("No Roots");
    } else if (discriminant > 0) {
      const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
      const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`x1=${rootOne}, x2=${rootTwo}`);
    } else {
      const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
      setResult(`x=${rootOne}`);
    }
  }

  return (
    <div className="container">
      <h1>Quadratic Formula</h1>
      <form id="quad-form" onSubmit={(event) => { quadraticFormula(event) }}>
        <label htmlFor="a">a value:</label>
        <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
        <label htmlFor="b">b value:</label>
        <input type="number" id="b" name="b" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
        <label htmlFor="c">c value:</label>
        <input type="number" id="c" name="c" value={c} onChange={(event) => { setC(Number(event.target.value)) }} required />
        <label htmlFor="result">Result:</label>
        <input type="text" id="result" name="result" value={result} readOnly />
        <input type="submit" value="Calculate!" />
      </form>
    </div>
  );
}

export default Quadratic;