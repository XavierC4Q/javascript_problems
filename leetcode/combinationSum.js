/**
 * @function combinationSum
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[]}
 * 
 * 
 * BRUTE FORCE
 * 
 * Start at one number then perform the following:
 * 
 * 1. If the number divides evenly into the target, add an array of numbers equal in
 * length to the target / number. For example if target is 8 and number is 2, 8 / 2 is 4
 * so an array of 2 repeated 4 times is added.
 * 
 * 2. If the number does NOT divide evenly, add the number to itself and see if there is
 * a number in the array that will make up the difference.
 * 
 * 3. For both cases, remove one copy of itself and check if any numbers make up the 
 * difference.
 * 
 * It is important to remeber that I will NOT go backwards in the array
 */

function getSums(arr, target, start, sums){
    
    let result = []
    if(target === 0){
        result.push(sums)
        return result
    }

    for(let x = start; x < arr.length; x++){
        if(target - arr[x] >= 0){            
            result = result.concat(getSums(arr, target - arr[x], x, sums.concat(arr[x])))
        }
    }

    return result
}

var combinationSum = function(candidates, target){
    return getSums(candidates, target, 0, [])
}

console.log(combinationSum([1, 3, 5, 8, 7, 12, 10, 2], 11))