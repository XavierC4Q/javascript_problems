/**
 * @function findAll
 * 
 * @param {number} n 
 * @description The target number that digits should addd up to.
 * 
 * @param {number} k 
 * @description The amount of digits in each number
 * 
 * 
 * We want to generate all the numbers of three digits that:
 * the value of adding their corresponding ones(digits) is equal to 10.
 * their digits are in increasing order (the numbers may have two or more equal 
 * contiguous digits)
 * The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334
 * Make a function that receives two arguments:
 * the sum of digits value
 * the amount of desired digits for the numbers
 * The function should output an array with three values: [1,2,3]
 * 1 - the total amount of all these possible numbers
 * 2 - the minimum number
 * 3 - the maximum numberwith
 * The example given above should be:
 * findAll(10, 3) ---> [8, "118", "334"]
 * If we have only one possible number as a solution, it should output a result 
 * like the one below:
 * findAll(27, 3) ---> [1, "999", "999"]
 * If there are no possible numbers, the function should output the empty array.
 * findAll(84, 4) ---> []
 * The number of solutions climbs up when the number of digits increases.
 * findAll(35, 6) ---> [123, '116999', '566666']
 * Features of the random tests:
 * Numbers of tests: 111
 * Sum of digits value between 20 and 65
 * Amount of digits between 2 and 15
 * 
 * 1. I know when to stop. The maximum number for each digit is simply
 * 9 repeated n times. For example if n is 5 then the max is 99999.
 * 
 * 2. The rules state that a valid number is one where the sum of its digits
 * is equal to the target number AND the digits are in ascending order.
 * 
 * 3. Remember that you need the minimum and maximum of such numbers.
 * 
 */

function findAll(n,k){
    let start = '1'
    let end = '9'
    let results = []
    if(k > 2){
        while(k > 1){
            start += '0'
            end += '9'
            k--
        }
    }

    start = Number(start)
    end = Number(end)

    for(let i = start; i <= end; i++){
        if(checkAscending(i)){
            if(reachesTarget(n, i)){
                results.push(i.toString())
            }
        }
    }
    console.log(results)
    if(results.length){
        return [results.length, results[0], results[results.length - 1]]
    }
    return []
}

console.log(findAll(30, 4))
/**
 * 
 * @function checkAscending
 * 
 * @param {number} num 
 * @description Number to check if digits are in ascending order
 */

function checkAscending(num){
    let s = num.toString().split('')
    for(let a = 0; a < s.length - 1; a++){
        if(Number(s[a]) > Number(s[a + 1])){
            return false
        }
    }
    return true
}

/**
 * @function reachesTarget
 * 
 * @param {number} target
 * @description Target number to match to
 * 
 * @param {number} num 
 * @description Number to check if sum of digits equals target.
 */

function reachesTarget(target, num){
    let sum = num.toString()
              .split('')
              .reduce((acc, e) => {
                return acc += Number(e)
              },0)
    return sum === target
}
