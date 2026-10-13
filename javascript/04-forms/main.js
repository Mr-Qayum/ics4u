const form = document.getElementById("quad-form");

const round = (n) => Number(n.toFixed(3));

const setText = (id, value) => {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.innerText = String(value);
};

const setResults = ({ discriminant, type, roots, vertex, axis }) => {
    setText("discriminant", discriminant);
    setText("num-roots", type);
    setText("result", roots);
    setText("vertex", vertex);
    setText("axis", axis);
};

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    const rootOne = round((-b + Math.sqrt(discriminant)) / (2 * a));
    const rootTwo = round((-b - Math.sqrt(discriminant)) / (2 * a));
    const x = -b / (2 * a);
    const y = a * x * x + b * x + c;
    const vertex = `(${round(x)}, ${round(y)})`;
    const axis = `x = ${round(x)}`;
    const results = { axis, discriminant, roots: "", type: "", vertex };

    if (a === 0) {
        return {
            ...results,
            axis: "N/A",
            roots: "N/A",
            type: "Not a quadratic",
            vertex: "N/A",
        };
    } else if (discriminant < 0) {
        return {
            ...results,
            roots: "No Real Roots",
            type: "0 (complex)",
        };
    } else if (discriminant > 0) {
        return {
            ...results,
            roots: `x₁ = ${rootOne}, x₂ = ${rootTwo}`,
            type: "2 (distinct)",
        };
    } else {
        return {
            ...results,
            roots: `x = ${rootOne}`,
            type: "1 (repeated)",
        };
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const a = Number(formData.get("a"));
    const b = Number(formData.get("b"));
    const c = Number(formData.get("c"));

    const roots = solveQuadratic(a, b, c);
    setResults(roots);
})