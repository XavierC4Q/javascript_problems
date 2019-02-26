function maxSubArray(nums) {
    for (let x = 1; x < nums.length; x++) {
        if (nums[x - 1] > 0){
            nums[x] += nums[x - 1]
        }
    }
    
    return Math.max(...nums)
}

// MY SOLUTION. WAS TOO SLOW
function maxSubArray(nums) {
    let largest;

    for(let a = 0; a < nums.length; a++){
        for (let b = a; b < nums.length; b++) {
            let vals = nums.slice(a, b + 1).join('+')
            let sumAll = eval(vals)
            
            if (largest === undefined) {
                largest = sumAll
            } else if (sumAll > largest) {
                largest = sumAll
            }
        }
    }
    
    return largest
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // [4,-1,2,1]
// maxSubArray([1,7,2,1,-5,9,3,11,-2,-3,6]) // [7,2,1,-5,9,3,11]