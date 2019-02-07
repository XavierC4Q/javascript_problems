function ListNode(val) {
    this.val = val;
    this.next = null;
}

var quickSort = function (array) {
    let left = []
    let right = []

    if (array.length < 2) {
        return array
    }

    let pivot = array.shift()

    while (array.length) {
        let val = array.shift()
        if (val < pivot) {
            left.push(val)
        } else {
            right.push(val)
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

var mergeTwoLists = function (l1, l2) {
    let values = []

    /* Get values for linked list 1*/
    while (l1) {
        values.push(l1.val)
        l1 = l1.next
    }

    /*Get values for linked list 2*/
    while (l2) {
        values.push(l2.val)
        l2 = l2.next
    }

    let sorted = quickSort(values)

    let newList = new ListNode(sorted.shift())
    let copy = newList
    while (sorted.length) {
        let newNode = new ListNode(sorted.shift())
        copy.next = newNode
        copy = copy.next
    }

    return newList
};


let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(4)

let b = new ListNode(1)
b.next = new ListNode(3)
b.next.next = new ListNode(4)

console.log(mergeTwoLists(a, b))