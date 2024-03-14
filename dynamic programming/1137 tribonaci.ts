/**
    The Tribonacci sequence Tn is defined as follows:

    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

    Given n, return the value of Tn.

    Example 1:

    Input: n = 4
    Output: 4
    Explanation:
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4
    Example 2:

    Input: n = 25
    Output: 1389537

    Constraints:

    0 <= n <= 37
    The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 */

function tribonacci(n: number): number {
    return fibo(n);
};

const calc: {[key: string] : number} = {}

function fibo(n: number): number {
    if (calc[n]) {
        return calc[n];
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 1;
    }

    const f1 = fibo(n - 1);
    const f2 = fibo(n - 2);
    const f3 = fibo(n - 3);

    calc[n] = f1 + f2 + f3;

    return calc[n];
}