/**
 * @function threeSum
 * @param {number[]} nums
 * @returns {number[]}
 * @description Given array nums, find if the sum of any three numbers equals 0
 */

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  let res = []
  nums.forEach((n, i) => {
    let num = n
    let pastNum = nums[i - 1]

    if (i === 0 || num !== pastNum) {

      let num2 = i + 1
      let num3 = nums.length - 1

      while (num2 < num3) {
        let sum = num + nums[num2] + nums[num3]
        if (sum > 0) {
          num3--
        } else if (sum < 0) {
          num2++
        } else {
          res.push([num, nums[num2], nums[num3]])
          while (nums[num2] === nums[num2 + 1]) {
            num2++
          }
          while (nums[num3] === nums[num3 - 1]) {
            num3--
          }

          num2++
          num3--
        }
      }
    };
  })

  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));