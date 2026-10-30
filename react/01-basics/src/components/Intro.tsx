export const Intro = () => {

    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="my-8 text-center font-bold text-4xl">React Basics - Complete Guide</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
                React is a JavaScript library for building user interfaces, especially single-page applications. It lets you create reusable
                components that manage their own state and render dynamically when data changes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
                React applications are built by combining small, reusable components into larger interfaces.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
                React uses Virtual DOM to efficiently update only the parts of the DOM that need to change, making apps fast and responsive. In
                other words re-rendering the Virtual DOM is faster than the actual DOM.
            </p>
            <p className="font-medium text-gray-700 text-lg leading-relaxed">When you change the real DOM, the browser may need to:</p>
            <ul className="list-inside list-disc space-y-1 text-gray-700 leading-relaxed">
                <li>Recalculate layout (reflow)</li>
                <li>Recalculate styles</li>
                <li>Repaint pixels</li>
                <li>Update the render tree</li>
            </ul>
            <p className="font-medium text-gray-700 text-lg leading-relaxed">The Virtual DOM is just plain JavaScript objects:</p>
            <ul className="list-inside list-disc space-y-1 text-gray-700 leading-relaxed">
                <li>The virtual DOM is made of simple JavaScript objects</li>
                <li>It is created and compared in pure JavaScript</li>
                <li>It is not connected to layout</li>
                <li>It does not trigger reflow or repaint directly</li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed">
                React Hooks are special functions that let you use state, lifecycle methods, and other React features in functional components
                without writing classes. The most commonly used hooks are:
            </p>
            <ul className="list-inside list-disc space-y-1 text-gray-700 leading-relaxed">
                <li>
                    <code>useState</code>
                </li>
                <li>
                    <code>useEffect</code>
                </li>
                <li>
                    <code>useRef</code>
                </li>
                <li>
                    <code>useMemo</code>
                </li>
                <li>
                    <code>useCallback</code>
                </li>
                <li>
                    <code>useContext</code>
                </li>
            </ul>

            {(() => {
                // This is an example of an Immediately Invoked Function Expression (IIFE)
                const name = "Mr. Qayum";
                const year = new Date().getFullYear();

                return <h2 className="mt-10 text-center text-gray-500 text-sm">{`Created by ${name} in ${year} 🛠️`}</h2>;
            })()}
        </div>
    )
}

