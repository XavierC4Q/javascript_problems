function nextPermutation(nums){
    let target = null
    let index = nums.length - 1

    while(index >= 0){
        if(nums[index] > nums[index - 1]){
            target = index
            break;
        }
        index--
    }

    if(target === null){
        return nums.reverse()
    }

    let swapWith = target - 1

    let num1 = nums[target]
    let num2 = nums[swapWith]

    nums[target] = num2 
    nums[target - 1] = num1
    
    return nums
}

nextPermutation([1,3,2])
