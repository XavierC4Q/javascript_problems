/**
 * @function lengthOfLongestSubstring
 * 
 * 
 * @param {string} s 
 * @returns {number} length of longest substring without repeating characters
 */

function lengthOfLongestSubstring(s){
    let chars = []
    let letters = s.split('')
    let long = 0
    for(let a = 0; a < letters.length; a++){
        let findDupe = chars.indexOf(letters[a])
        if(findDupe !== -1){
            if(chars.length > long){
                long = chars.length
            }
            chars = chars.slice(findDupe + 1).concat(letters[a])
        } else {
            chars.push(letters[a])
        }
    }
    
    return Math.max(long, chars.length)
}

console.log(lengthOfLongestSubstring("aab"))