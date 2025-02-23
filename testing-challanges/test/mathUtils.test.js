import { describe, it, expect } from 'vitest';
import { factorial, gcd, fibonacci } from '../src/mathUtils';

describe('Math Utils', () => {
    it('factorial', () => {
        expect(factorial(5)).toBe(120);
        expect(() => factorial(-1).toThrow('Negative numbers are not allowed'));
    })

    it('gcd', () => {
        expect(gcd(56, 98)).toBe(14);
        expect(gcd(101, 10)).toBe(1);   
    })

    it('fibonacci', () => {
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
        expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowes');
    })
});