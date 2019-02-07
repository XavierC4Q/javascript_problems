/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * 
 * Given an array of integers nums sorted in ascending order, find the starting 
 * and ending position of a given target value.Your algorithm's runtime complexity 
 * must be in the order of O(log n).If the target is not found in the array, 
 * return [-1, -1].
 */

var searchRange = function(nums, target) {
    if(!nums.length){
        return [-1, -1]
    }
    if(nums.length === 1){
        if(nums[0] === target) return [0, 0]
        return [-1, -1]
    }

    let first 
    let second 

    for(let a = 0; a < nums.length; a++){
        if(nums[a] === target){
            first = a
            break;
        }
        if(nums[a] > target){
            break;
        }
    }

    for(let b = nums.length - 1; b >= 0; b--){
        if(nums[b] === target){
            second = b 
            break;
        }
        if(nums[b] < target){
            break;
        }
    }

    if(first === undefined){
        first = -1
    }
    if(second === undefined){
        second = -1
    }

    return [first, second]
};

console.log(searchRange([5,6,6,6,7,7,8,8,10], 8))