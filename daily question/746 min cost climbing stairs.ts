/**
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.



Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.


Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999
 */

function minCostClimbingStairs(cost: number[]): number {

    let steps: {[key: string]: number} = {};

    steps[0] = cost[0];
    steps[1] = cost[1];

    // let minimumIndex = steps[0] < steps[1] ? 0 : 1;

    let i = 0;

    let exitCost: number[] = [];

    while (Object.keys(steps).length > 0) {
        console.log("steps", steps);

        const minimumIndex = minimumCost(steps);

        console.log("minimumIndex", minimumIndex);

        if (minimumIndex + 2 >= cost.length) {
            exitCost.push(steps[minimumIndex]);
            delete steps[minimumIndex];
            continue;
        }

        if (minimumIndex < cost.length - 1) {
            const nextA = cost[minimumIndex + 1];

            const ncost = steps[minimumIndex] + nextA;

            console.log("new cost", ncost, steps[minimumIndex + 1])

            if (steps[minimumIndex + 1] && steps[minimumIndex + 1] > ncost) {
                steps[minimumIndex + 1] = ncost;
            } else if (!steps[minimumIndex + 1]) {
                steps[minimumIndex + 1] = ncost;
            }
        }

        if (minimumIndex < cost.length - 2) {
            const nextB = cost[minimumIndex + 2];

            const ncost = steps[minimumIndex] + nextB;

            if (steps[minimumIndex + 2] && steps[minimumIndex + 2] > ncost) {
                steps[minimumIndex + 2] = ncost;
            } else if (!steps[minimumIndex + 2]) {
                steps[minimumIndex + 2] = ncost;
            }
        }

        delete steps[minimumIndex];

        i++;
    }

    console.log("steps final", steps);
    console.log("exit cost", exitCost);

    if (exitCost.length === 0) {
        return 0;
    }

    let min = exitCost[0];

    for (let i = 0; i < exitCost.length; i++) {
        if (exitCost[i] < min) {
            min = exitCost[i];
        }
    }

    return min;
};

function minimumCost(steps: {[key: string]: number}): number {
    const keys = Object.keys(steps);

    let minimumIndex = keys[0];

    keys.forEach((key, index) => {
        if (steps[key] < steps[minimumIndex]) {
            minimumIndex = key;
        }
    });

    return Number(minimumIndex);
}

function nextStep(cost: number[], index: number): number {
    if (cost[index + 1] < cost[index + 2]) {
        return index + 1;
    } else {
        return index + 2;
    }
}