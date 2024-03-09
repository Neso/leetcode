function getMinimumCommon(nums1: number[], nums2: number[]): number {

    let minimumCommon = -1;

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            minimumCommon = nums1[i];
            break;
        }
    }

    return minimumCommon;
};

function getCommonOptimised(nums1: number[], nums2: number[]): number {
    let minimumCommon = 0;

    let discovered = false;
    let nums1Start = 0;
    let nums2Start = 0;

    if (nums1[nums1Start] < nums2[nums2Start]) {
        nums1Start = binarySearch(nums1, nums2[nums2Start]).left;
    } else {
        nums2Start = binarySearch(nums2, nums1[nums1Start]).left;
    }

    for (let i = nums1Start; i < nums1.length; i++) {
        for (let j = nums2Start; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                return nums1[i];
            } else if (nums1[i] < nums2[j]) {
                break;
            }
        }
    }

    return -1;
}

function binarySearch(nums: number[], target: number): {left: number, right: number, found: boolean} {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return {
                left: mid,
                right: mid,
                found: true

            };
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        left,
        right,
        found: false
    };
}