import { describe, it, expect } from "vitest";

import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe("Math Utils", () => {
    it("should add two numbers", () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    it("Subtract two numbers", () => {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(1, 3)).toBe(-2);
        expect(subtract(-1, 1)).toBe(-2);
    });

    it("Multiply two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 1)).toBe(-1);
    });

    it("Divide two numbers", () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(1, 3)).toBe(1/3);
        expect(divide(-1, 1)).toBe(-1);
    })

    it("Divide by zero", () => {
        expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
    })
});