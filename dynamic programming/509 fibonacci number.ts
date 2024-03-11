function fib(n: number): number {
    return fibo(n);
};

function fibo(n: number): number {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
}