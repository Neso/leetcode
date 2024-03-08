function maxFrequencyElements(nums: number[]): number {
    const frequencyCount: {[key: string]: number} = {};

    let maxFrequency = 0;

    nums.forEach((num) => {
        frequencyCount[num] = frequencyCount[num] ? frequencyCount[num] + 1 : 1;

        if (frequencyCount[num] > maxFrequency) {
            maxFrequency = frequencyCount[num];
        }
    });

    const maxFrequencyElements = Object.keys(frequencyCount).filter((key) => frequencyCount[key] === maxFrequency);

    return maxFrequencyElements.length * maxFrequency;

};