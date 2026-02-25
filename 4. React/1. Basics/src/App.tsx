import { useState, useEffect, useRef, useMemo } from "react";
import { Intro } from "./components/Intro.tsx";
import { Step } from "./components/Step.tsx";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const [forceRender, setForceRender] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const [name, setName] = useState<string>("");
  const myRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const expensiveCalculation = (num: number) => {
    console.log("Running expensive calculation...");
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += num;
    }

    return result;
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

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

  return (
    <div className="max-w-[800px] mx-auto">
      <Intro />

      <Step
        title="1. Props"
        renderExtra={() => (
          <p className="text-green-600 font-medium">
            This content is coming from a function prop!
          </p>
        )}
      >
        <p>
          The <code>Step</code> boxes are reusable components.
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
          <b> does not</b> cause a re-render.
        </p>

        <div className="mt-4 space-y-1">
          <p>
            <strong>Ref value:</strong> {myRef.current}
          </p>
          <p>
            <strong>State value:</strong> {forceRender}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
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

        <hr className="my-8 border-gray-300" />

        <div className="space-y-3">
          <p>
            <code>useRef</code> can also access JSX elements.
          </p>

          <div className="flex flex-col gap-3">
            <input
              ref={inputRef}
              className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Click the button to focus me"
            />

            <button
              className="self-start px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
              onClick={() => {
                inputRef.current?.focus();
              }}
            >
              Focus Input
            </button>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="space-y-3">
          <p>
            <code>useRef</code> can also control scrolling.
          </p>

          <button
            className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
            onClick={() => {
              boxRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scroll to Box
          </button>

          <div
            ref={boxRef}
            className="mt-6 p-10 bg-yellow-200 rounded-lg text-center font-semibold"
          >
            Target Box
          </div>
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
          onClick={() => setItems([...items, "New Item"])}
        >
          Add Item
        </button>
      </Step>

      <Step title="7. Controlled Inputs (Forms)">
        <input
          className="mt-3 px-3 py-2 border rounded-md"
          value={name}
          onChange={(event) => setName(event.target.value)}
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

      <Step title="9. useMemo">
        <p>
          <code>useMemo</code> prevents expensive calculations from running on
          every render. The value is recalculated only when its dependencies
          change.
        </p>

        <p>Count: {count}</p>
        <p>Memoized result: {memoizedValue}</p>

        <button
          className="mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>

        <button
          className="mt-3 ml-3 px-5 py-2.5 bg-gray-600 text-white rounded-lg"
          onClick={() => setForceRender(forceRender + 1)}
        >
          Force Re-render
        </button>

        <p className="mt-2">
          Check the console. The expensive calculation only runs when{" "}
          <code>count</code> changes, not when the component simply re-renders.
        </p>
      </Step>

      <Step title="10. Fragments">
        <p>
          React components must return one parent element. Fragments let us
          group elements without adding extra DOM nodes.
        </p>

        <>
          <h4>This is inside a Fragment</h4>
          <p>No extra DOM element is created.</p>
        </>
      </Step>

      <Step title="11. Derived State">
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
