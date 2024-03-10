

function intersection(nums1: number[], nums2: number[]): number[] {

    if (nums1.length < nums2.length) {
        return intersect(nums1, nums2);
    } else {
        return intersect(nums2, nums1);
    }

};

function intersect(a: number[], b: number[]): number[] {
    const intersection: {[key: string]: boolean} = {};

    const checkedNumbers: {[key: string]: boolean} = {};

    a.forEach((num) => {
        if (checkedNumbers[num]) {
            return;
        }

        checkedNumbers[num] = true;

        if (b.includes(num)) {
            intersection[num] = true;
        }
    });

    return Object.keys(intersection).map((key) => parseInt(key));
}