function pivotInteger(n: number): number {
    const numbers: number[] = new Array(n).fill(0);

    let countLower = 0;
    let countHigher = 0;

    for (let i = 0; i < n; i++) {
        numbers[i] = i + 1;
    }

    let indexHigher = n - 1;
    countHigher = numbers[indexHigher];

    for (let i = 0; i < n; i++) {
        countLower += numbers[i];

        if (countLower === countHigher && i === indexHigher) {
            return numbers[i];
        } else if (countLower > countHigher) {
            indexHigher--;
            countHigher += numbers[indexHigher];

            if (countLower === countHigher && i === indexHigher) {
                return numbers[i];
            }
        }
    }

    return -1;
};