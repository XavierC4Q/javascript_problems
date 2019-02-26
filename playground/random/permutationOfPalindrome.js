function permutationOfPalindrome(str){
    if (!str || typeof str !== 'string'){
        return false
    };
    let chars = {};
    str.split('').forEach(letter => {
        chars[letter] ? chars[letter]++ : chars[letter] = 1
    });

    let charCounts = Object.values(chars);

    let foundOdd = false;

    for (let x = 0; x < charCounts.length; x++) {
        if (charCounts[x] % 2 !== 0) {
            if (!foundOdd) {
                foundOdd = true
            }
            else {
                return false
            }
        }
    };

    return true
}

console.log(permutationOfPalindrome('boxob'))