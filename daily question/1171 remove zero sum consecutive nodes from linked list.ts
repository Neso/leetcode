/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
    val: number;
    next: ListNode | null;
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let current = head;

    let numbers: number[] = [];

    while (current) {
        numbers.push(current.val);
        current = current.next;
    }

    let numbersCleaned = checkZeroSums(numbers);

    let newHead: ListNode | null = null;
    let currentNew: ListNode | null = newHead;

    for (let i = 0; i < numbersCleaned.length; i++) {
        if (currentNew) {
            currentNew.next = {
                val: numbersCleaned[i],
                next: null
            };

            currentNew = currentNew.next;
        } else {
            newHead = {
                val: numbersCleaned[i],
                next: null
            };

            currentNew = newHead;
        }
    }

    return newHead;
};




function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let current = head;
    let previous: ListNode | null = null;

    let sumLists: {[key: number]: ListNode} = {};

    while (current?.val !== 0) {
        current = current?.next || null;
    }

    while (current) {
        current.previous = previous;
        previous = current;
        current = current.next;

        if (current?.val === 0) {
            previous.next = current.next;
            current = previous;
        }
    }

    return checkList(head);
};

function checkList(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }

    let startCount = head;
    let count = head?.val || 0;

    let sumLists: {[key: number]: ListNode} = {};

    let current: ListNode | null = head;

    let newList: ListNode | null = null;

    let aboveZero = count > 0;

    if (!sumLists[count]) {
        sumLists[count] = current;
    }

    let isListChanged = false;

    do {
        while (current) {
            current = current.next;
            count += current?.val || 0;

            if (!current) {
                break;
            }

            if (current?.val > 0 && aboveZero) {
                if (!sumLists[count]) {
                    sumLists[count] = current;
                }
            } else if (current?.val < 0 && !aboveZero) {
                if (!sumLists[count]) {
                    sumLists[count] = current;
                }
            } else {
                if (sumLists[count]) {
                    const countHit = sumLists[count];
                    delete sumLists[count];

                    if (newList) {
                        newList.next = current?.next;

                        if (current?.next) {
                            current.next.previous = newList;
                        }
                    } else {
                        newList = countHit.previous;

                        if (newList) {
                            newList.next = current?.next;
                        } else {
                            newList = current?.next;
                        }
                    }

                    isListChanged = true;
                }
            }
        }

        current = newList;
        sumLists = {};
        count = current?.val || 0;
        aboveZero = count > 0;
        newList = null;
    } while (isListChanged);

    if (newList) {
        return newList;
    }

    return head;

}