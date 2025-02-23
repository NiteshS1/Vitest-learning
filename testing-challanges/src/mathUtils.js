export const factorial = (n) => {
    if(n < 0 ) throw new Error('Negative numbers are not allowed');

    return n === 0 ? 1 : n * factorial(n - 1);
}

export const gcd = (a, b) => {
    if(b === 0) return a;
    return gcd(b, a % b);
}

// export const fibonacci = (n) => {
//     if(n<0) throw new Error('Negative numbers are not allowed');
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

export const fibonacci = (n) => {
    if( n < 0) throw new Error("Negative numbers are not allowes");

    const sequence = [0, 1];

    for(let i = 2; i < n; i++){
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}