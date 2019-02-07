/**
 * IMPLEMENT A FUNCTION TO ADD TWO LARGE NUMBERS TOGETHER.
 * WILL NEED TO ADD STRINGS TOGETHER.
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

console.log(addNums(1372, 69))