function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addNums(a, b){
    let stringX = a.toString()
    let stringY = b.toString()

    let numA
    let numB 

    if(stringX.length > stringY.length){
        numA = stringX
        numB = stringY
    } else {
        numA = stringY 
        numB = stringX
    }

    numA = numA.split('')
    numB = numB.split('')

    let total = ''
    let carry = 0
    
    while(numB.length){
        let sum = Number(numA.pop()) + Number(numB.pop()) + carry
        if(sum === 10){
            carry = 1
            total = 0 + total
        }
        else if(sum > 10){ 
            carry = 1 
            sum = sum % 10
            total = sum + total
        }
        else {
            carry = 0
            total = sum + total
        }
    }
    
    while(numA.length){
        let sum = Number(numA.pop()) + carry
        if(sum === 10){
            carry = 1
            total = 0 + total
        }
        else if(sum >= 10){
            carry = 1
            sum = sum % 10
            total = sum + total
        }
        else {
            carry = 0
            total = sum + total
        }
    }
    
    if(carry){
        return carry + total
    }
    return total
}

var addTwoNumbers = function (l1, l2) {
    if (!l1 && !l2) return 0

    let valsA = []
    let valsB = []
    let total = 0


    while (l1) {
        valsA.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        valsB.push(l2.val)
        l2 = l2.next
    }

    valsA = valsA.reverse().join('')
    valsB = valsB.reverse().join('')

    let num1 = valsA.length ? valsA : 0
    let num2 = valsB.length ? valsB : 0

    total = addNums(num1, num2)

    total = total.split('').reverse()

    let result = new ListNode(Number(total.shift()))
    let dummy = result
    while(total.length){
        dummy.next = new ListNode(Number(total.shift()))
        dummy = dummy.next
    }
    
    return result
};

let a = new ListNode(1)
a.next = new ListNode(0)
a.next.next = new ListNode(0)
a.next.next.next = new ListNode(0)
a.next.next.next.next = new ListNode(0)
a.next.next.next.next.next = new ListNode(0)
a.next.next.next.next.next.next = new ListNode(0)
a.next.next.next.next.next.next.next = new ListNode(0)
a.next.next.next.next.next.next.next.next = new ListNode(0)

let b = new ListNode(5)
b.next = new ListNode(6)
b.next.next = new ListNode(4)

addTwoNumbers(a, b)

console.log(564 + 1000000000000000000000000000001)
