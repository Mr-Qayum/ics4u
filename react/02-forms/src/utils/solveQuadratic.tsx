import type { Results } from "../types";
import { round } from "../utils";

export const solveQuadratic = (a: number, b: number, c: number): Results => {
    const discriminant = b * b - 4 * a * c;
    const rootOne = round((-b + Math.sqrt(discriminant)) / (2 * a));
    const rootTwo = round((-b - Math.sqrt(discriminant)) / (2 * a));
    const x = -b / (2 * a);
    const y = a * x * x + b * x + c;
    const vertex = `(${round(x)}, ${round(y)})`;
    const axis = `x = ${round(x)}`;
    const results: Results = { axis: "N/A", discriminant: "N/A", roots: "N/A", type: "Not a quadratic", vertex: "N/A" };

    if (a === 0) {
        return results;
    } else if (discriminant < 0) {
        return {
            axis,
            discriminant: discriminant.toString(),
            roots: "No Real Roots",
            type: "0 (complex)",
            vertex,
        };
    } else if (discriminant > 0) {
        return {
            axis,
            discriminant: discriminant.toString(),
            roots: `x₁ = ${rootOne}, x₂ = ${rootTwo}`,
            type: "2 (distinct)",
            vertex,
        };
    } else {
        return {
            axis,
            discriminant: discriminant.toString(),
            roots: `x = ${rootOne}`,
            type: "1 (repeated)",
            vertex,
        };
    }
};