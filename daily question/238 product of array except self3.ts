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

    const leftArray = new Array(nums.length);
    leftArray[0] = nums[0];
    const rightArray = new Array(nums.length);
    rightArray[nums.length - 1] = nums[nums.length - 1];

    for (let i = 1; i < nums.length; i++) {
        leftArray[i] = leftArray[i - 1] * nums[i];

        rightArray[nums.length - 1 - i] = rightArray[nums.length - i] * nums[nums.length - 1 - i];
    }

    console.log("leftArray", leftArray);
    console.log("rightArray", rightArray);

    for (let i = 0; i < nums.length; i++) {
        const left = i - 1 >= 0 ? leftArray[i - 1] : 1;
        const right = i + 1 < nums.length ? rightArray[i + 1] : 1;

        answer[i] = left * right;
    }

    return answer;
};

