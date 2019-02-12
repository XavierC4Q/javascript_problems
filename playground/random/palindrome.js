var isPalindrome = function(s) {
    if(!s) return false;
    return s.split('').reverse().join('') === s
}