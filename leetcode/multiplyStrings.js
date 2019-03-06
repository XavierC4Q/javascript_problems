function multiply(num1, num2) {
    if (!num1 || !num2)
        return 0;
    let total = '0';

    let numStrA = num1.toString();
    let numStrB = num2.toString();

    let long;
    let short;

    if (numStrA.length > numStrB.length) {
        long = numStrA
        short = numStrB
    } else {
        long = numStrB
        short = numStrA
    }

    for (let x = short.length - 1; x >= 0; x--) {
        let product = multiNums(long, short[x])
        let padWithZeroes = addZeroes(short.length - 1 - x, product)
        
        total = addNumbers(total, padWithZeroes)
        
    }
    
    return total
}

// For each number, a will be the longest and b will be the single digit from
// the shorter number
function multiNums(a, b) {
    let total = "";
    let carry = 0;
    
    let digits = a.split("");

    while (digits.length) {
        let popped = digits.pop();
        let prod = Number(popped) * Number(b) + carry;

        if (prod >= 10) {
            total = prod.toString()[1] + total;
            carry = Number(prod.toString()[0]);
        } else {
            total = prod + total;
            carry = 0
        }
    }
    

    if (carry) {
        
        return carry + total
    }
    
    return total
}
// For each of the numbers returned above, add leading zeroes to it.
function addZeroes(amount, num) {
    for (let x = amount; x > 0; x--) {
        num = num + 0
    }
    return num
}

function addNumbers(strNumA, strNumB) {
    let total = ''
    let arrA = strNumA.split('')
    let arrB = strNumB.split('')
    let carry = 0
    while (arrA.length || arrB.length) {
        if (arrA.length && arrB.length) {
            let digitA = arrA.pop()
            let digitB = arrB.pop()
            let sum = Number(digitA) + Number(digitB) + carry

            if (sum >= 10) {
                carry = 1
                total = (sum % 10) + total
            } else {
                carry = 0
                total = sum + total
            }
        } else if (arrA.length && !arrB.length) {
            while (arrA.length) {
                let sum = Number(arrA.pop()) + carry
                if (sum >= 10) {
                    carry = 1
                    total = (sum % 10) + total
                } else {
                    total = arrA.join('') + sum + total
                    return total
                }
            }
            if (carry) {
                return carry + total
            } else {
                return total
            }
        } else if (arrB.length && !arrA.length) {
            while (arrB.length) {
                let sum = Number(arrB.pop()) + carry
                if (sum >= 10) {
                    carry = 1
                    total = (sum % 10) + total
                } else {
                    total = arrB.join('') + sum + total
                    return total
                }
            }
            if (carry) {
                return carry + total
            } else {
                return total
            }
        }
    }
    
    if (carry) {
        return carry + total
    }
    return total
}
console.log(multiply('902381', '99743'));