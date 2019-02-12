var isPalindrome = function (s) {
    if (!s) return false;
    let mid = Math.floor(s.length / 2)

    for(let i = 0; i < mid; i++){
        if(s[i] !== s[s.length - i - 1]){
            return false
        }
    }
    return true
}

var makeSubString = function (s, longest, begin, end) {

    if (begin === end) {

        return longest
    }

    let word = s.slice(begin, end)


    if (isPalindrome(word) && word.length > longest.length) {
        return word
    }

    return makeSubString(s, longest, begin, end - 1)
}

var longestPalindrome = function (s) {

    let longest = ''

    if (!s) return ''
    if (s.length < 3) {
        if (isPalindrome(s)) return s
        return s[0]
    }

    for (let i = 0; i < s.length; i++) {
        if (makeSubString(s, '', i, s.length).length > longest.length) {
            longest = makeSubString(s, '', i, s.length)
        }
    }
    return longest
}

console.log(longestPalindrome("zz"))