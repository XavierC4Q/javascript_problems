/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   let longest = ''
   let index = 1

   for(let x = 0; x < strs[0].length; x++){
       let start = strs[0].slice(0, index)
       let check = strs.every(s => s.slice(0, index) === start)
       if(check){
           index++
       }
       else {
           break;
       }
   }

   longest = strs[0].slice(0, index - 1)

   return longest
};

console.log(longestCommonPrefix(["dog","racecar","car"]))
