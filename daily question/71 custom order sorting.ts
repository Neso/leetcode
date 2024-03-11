interface Hash {
    order: number;
    count: number;
}

function customSortString(order: string, s: string): string {
    const hash: {[key: string]: Hash} = {};

    for (let i = 0; i < order.length; i++) {
        hash[order[i]] = {
            order: i,
            count: 0
        };
    }

    let other = '';

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]].count++;
        } else {
            other += s[i];
        }
    }

    return order.split('').map((char) => char.repeat(hash[char].count)).join('') + other;
};