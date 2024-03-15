/**
 *
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.



Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

 */

function productExceptSelf(nums: number[]): number[] {
    const answer = new Array(nums.length).fill(1);

    let leftTotal = 1;

    const test = 1 / 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            answer[i] = multiply(answer[i], nums[j]);
        }

        // console.log("out", leftTotal, answer[i]);

        answer[i] = multiply(answer[i], leftTotal);
        leftTotal = multiply(leftTotal,  nums[i]);
    }

    return answer;
};

function multiply(a: number, b: number) : number {
    const ab = `${a}*${b}`;
    if (calc[ab]) {
        return calc[ab];
    } else {
        const r = a * b;

        calc[ab] = r;

        return r;
    }
}

const calc: {[key: string] : number} = {}

