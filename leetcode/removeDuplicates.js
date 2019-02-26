const removeDuplicates = (nums) => {
    if (!nums.length || !nums) return 0;
    let visitedNum = nums[0]
    for (let x = 1; x < nums.length; x++) {
        if (nums[x] === visitedNum) {
            let left = nums.slice(0, x)
            let right = nums.slice(x + 1)
            nums = left.concat(right)
            x--
        } else {
            visitedNum = nums[x]
        }
    }
    
    return nums.length
}

console.log(removeDuplicates([1,1,2]))