import { useState, useEffect, useRef } from "react";
import { Intro } from "./components/Intro.tsx";
import { Step } from "./components/Step.tsx";

export const App = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [forceRender, setForceRender] = useState(0);
  const myRef = useRef(0);
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Orange"]);

  console.log("App Rendered");

  useEffect(() => {
    console.log("Component Mounted (runs once)");

    return () => {
      console.log("Component Unmounted (runs once)");
    };
  }, []);

  useEffect(() => {
    console.log("Count was changed and component was re-rendered!");
  }, [count]);

  const addItem = () => {
    setItems([...items, "New Item"]);
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <Intro />

      <Step title="1. Props">
        <p>
          The <code>Step</code> boxes are reusable components that we pass a
          title prop to.
        </p>
      </Step>

      <Step title="2. State">
        <p>
          The <code>useState</code> hook allows React to remember values, but
          forces a re-render.
        </p>
        <p>Count: {count}</p>

        <button
          className="mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
      </Step>

      <Step title="3. Re-render Explanation">
        <p>
          Every time state changes, the parent component <code>App</code>
          re-runs and re-renders itself along with all of its child components.
          Check the console to see it happening.
        </p>

        <p>
          This may seem inefficient, but these re-renders happen in the Virtual
          DOM. React then compares the previous and new Virtual DOM trees and
          updates the real DOM only where necessary.
        </p>
      </Step>

      <Step title="4. Refs">
        <p>
          The <code>useRef</code> hook allows React to remember values, but
          <b> doesn't</b> cause a re-render.
        </p>
        <p>Ref value: {myRef.current}</p>
        <p>State value: {forceRender}</p>

        <div className="flex gap-3 mt-3">
          <button
            className="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
            onClick={() => {
              myRef.current += 1;
            }}
          >
            Update Ref
          </button>

          <button
            className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            onClick={() => setForceRender(forceRender + 1)}
          >
            Re-render
          </button>
        </div>
      </Step>

      <Step title="5. Events">
        <button
          className="mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          onClick={() => setShowMessage(!showMessage)}
        >
          Toggle Message
        </button>

        {showMessage && <p>You triggered an event!</p>}
      </Step>

      <Step title="6. Lists and Keys">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className="mt-3 px-4 py-2 bg-gray-600 text-white rounded-lg"
          onClick={addItem}
        >
          Add Item
        </button>
      </Step>

      <Step title="7. Controlled Inputs (Forms)">
        <input
          className="mt-3 px-3 py-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />

        <p>Hello {name}</p>
      </Step>

      <Step title="8. useEffect">
        <p>
          <code>useEffect</code> runs after render and lets us handle lifecycle
          events like mounting, unmounting and dependency changes.
        </p>
      </Step>

      <Step title="9. Fragments">
        <p>
          React components must return one parent element. Fragments let us
          group elements without adding extra DOM nodes.
        </p>

        <>
          <h4>This is inside a Fragment</h4>
          <p>No extra DOM element is created.</p>
        </>
      </Step>

      <Step title="10. Derived State">
        <p>
          This value is calculated from <code>count</code>. It is not stored in
          state.
        </p>

        <p>Count: {count}</p>

        <p>Status: {count === 0 ? "Zero" : count % 2 === 0 ? "Even" : "Odd"}</p>

        <button
          className="mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
      </Step>
    </div>
  );
};
