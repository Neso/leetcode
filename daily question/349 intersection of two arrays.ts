

function intersection(nums1: number[], nums2: number[]): number[] {

    nums1.forEach((num) => {
        if (nums2.includes(num)) {
            intersection[num] = true;
        }
    });

    return Object.keys(intersection).map((key) => parseInt(key));
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