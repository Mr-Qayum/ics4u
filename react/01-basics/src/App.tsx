import { Intro } from "./components/Intro"
import { Step } from "./components/Step"
import { useRef, useState, useEffect, useMemo } from "react"

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const [forceRender, setForceRender] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const [name, setName] = useState<string>("");
  const myRef = useRef<number>(0);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log("App is re-rendering");

  const memoizedValue = useMemo(() => {
    const expensiveCalculation = (num: number) => {
      let result = 0;

      console.log("Running expensive calculation...");

      for (let i = 0; i < 100000000; i++) {
        result += num;
      }

      return result;
    };

    return expensiveCalculation(count);
  }, [count]);

  useEffect(() => {
    console.log("Component Mounted (runs once)");

    return () => {
      console.log("Component Unmounted (runs once)");
    }
  }, []);

  return (
    <div className="mx-auto max-w-200">
      <Intro />

      <Step title="1. Props" renderExtra={() => <p className="font-medium text-green-600">This content is coming from a function prop!</p>}>
        <p>
          The <code>Step</code> boxes are reusable components.
        </p>
      </Step>

      <Step title="2. State">
        <p>
          The <code>useState</code> hook allows React to remember values, but forces a re-render.
        </p>
        <p>Count: {count}</p>
        <button className="mt-3 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </Step>

      <Step title="3. Re-render Explanation">
        <p>
          Every time state changes, the parent component <code>App</code>
          re-runs and re-renders itself along with all of its child components. Check the console to see it happening.
        </p>
        <p>
          This may seem inefficient, but these re-renders happen in the Virtual DOM. React then compares the previous and new Virtual DOM
          trees and updates the real DOM only where necessary.
        </p>
      </Step>

      <Step title="4. Refs">
        <p>
          The <code>useRef</code> hook allows React to remember values, but
          <b> does not</b> cause a re-render.
        </p>
        <div className="mt-4 space-y-1">
          <p>
            <strong>Ref value:</strong> (check console or click button)
          </p>
          <p>
            <strong>State value:</strong> {forceRender}
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <button
            className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700"
            onClick={() => {
              myRef.current += 1;
              console.log("Ref value (no re-render):", myRef.current);
            }}
          >
            Update Ref
          </button>
          <button
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
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
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Click the button to focus me"
              ref={inputRef}
            />
            <button
              className="self-start rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700"
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
            className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700"
            onClick={() => {
              boxRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scroll to Box
          </button>
          <div className="mt-6 rounded-lg bg-yellow-200 p-10 text-center font-semibold" ref={boxRef}>
            Target Box
          </div>
        </div>
      </Step>

      <Step title="5. Events">
        <button
          className="mt-3 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          onClick={() => setShowMessage(!showMessage)}
        >
          Toggle Message
        </button>
        {showMessage && <p>You triggered an event!</p>}
      </Step>

      <Step title="6. List and Keys">
        <ul>
          {items.map((item) => (
            <li key={crypto.randomUUID()}>{item}</li>
          ))}
        </ul>
        <button className="mt-3 rounded-lg bg-gray-600 px-4 py-2 text-white" onClick={() => setItems([...items, "New Item"])}>
          Add Item
        </button>
      </Step>

      <Step title="7. Controlled Inputs (Forms)">
        <input
          className="mt-3 rounded-md border px-3 py-2"
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
          value={name}
        />
        <p>Hello {name}</p>
      </Step>

      <Step title="8. useEffect">
        <p>
          <code>useEffect</code> runs after render and lets us handle lifecycle events like mounting, unmounting and dependency changes.
        </p>
      </Step>

      <Step title="9. useMemo">
        <p>
          <code>useMemo</code> prevents expensive calculations from running on every render. The value is recalculated only when its
          dependencies change.
        </p>
        <p>Count: {count}</p>
        <p>Memoized result: {memoizedValue}</p>
        <button
          className="mt-3 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <button className="mt-3 ml-3 rounded-lg bg-gray-600 px-5 py-2.5 text-white" onClick={() => setForceRender(forceRender + 1)}>
          Force Re-render
        </button>
        <p className="mt-2">
          Check the console. The expensive calculation only runs when <code>count</code> changes, not when the component simply re-renders.
        </p>
      </Step>

      <Step title="10. Fragments">
        <p>React components must return one parent element. Fragments let us group elements without adding extra DOM nodes.</p>
        <>
          <h4>This is inside a Fragment</h4>
        </>
        <p>No extra DOM element is created.</p>
      </Step>

      <Step title="11. Derived State">
        <p>
          This value is calculated from <code>count</code>. It is not stored in state.
        </p>
        <p>Count: {count}</p>
        <p>Status: {count === 0 ? "Zero" : count % 2 === 0 ? "Even" : "Odd"}</p>
        <button
          className="mt-3 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
      </Step>
    </div>
  )
}

