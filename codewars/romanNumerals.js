/**
 * @function RomanNumerals
 * 
 * @description Create a RomanNumerals class that can convert a roman numeral 
 * to and from an integer value. It should follow the API demonstrated in the 
 * examples below. Multiple roman numeral values will be tested for each helper method.
 * Modern Roman numerals are written by expressing each digit separately starting 
 * with the left most digit and skipping any digit with a value of zero. 
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
 * 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
 * 1666 uses each Roman symbol in descending order: MDCLXVI.
 * 
 * 
 * Symbol	Value
 * I	1
 * V	5
 * X	10
 * L	50
 * C	100
 * D	500
 * M	1000
 */

class RomanNumerals {
    constructor() {
        this.symbols = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
    }

    toRoman(num) {
        let answer = ""

        /** LESS THAN 10 CASES */
        if (num < 10) {
            if (num === 9) {
                answer += "IX"
                return answer
            }
            if (num > 5) {
                answer += "V"
                num -= 5
                while (num > 0) {
                    answer += "I"
                    num--
                }
                return answer
            }
            if (num === 5) {
                answer += "V"
                return answer
            }
            if (num < 5) {
                if (num === 4) {
                    answer += "IV"
                    return answer
                } else {
                    while (num > 0) {
                        answer += "I"
                        num--
                    }
                    return answer
                }
            }
        }

        let divisor = "1"
        let lengthOfNum = num.toString().length
        while (lengthOfNum > 1) {
            divisor += "0"
            lengthOfNum--
        }

        let remainder = num % Number(divisor)
        let newNum = num - remainder

        /**IF NUMBER IS GREATER THAN 10 BUT LESS THAN 100*/

        if (newNum === 90) {
            answer += "XC"
        }
        if (newNum < 90 && newNum > 50) {
            let rounds = (newNum - 50) / 10
            answer += "L"
            while (rounds > 0) {
                answer += "X"
                rounds--
            }
        }
        if (newNum === 50) {
            answer += "L"
        }
        if (newNum === 40) {
            answer += "XL"
        }
        if (newNum < 40 && newNum >= 10) {
            let rounds = newNum / 10
            while (rounds) {
                answer += "X"
                rounds--
            }
        }
        /**IF NUMBER IS GREATER THAN OR EQUAL TO 100 BUT LESS THAN 1000 */
        if (newNum === 900) {
            answer += "CM"
        }
        if (newNum > 500 && newNum < 900) {
            let rounds = (newNum - 500) / 100
            answer += "D"
            while (rounds > 0) {
                answer += "C"
                rounds--
            }
        }
        if (newNum === 500) {
            answer += "D"
        }
        if (newNum === 400) {
            answer += "CD"
        }
        if (newNum >= 100 && newNum < 400) {
            let rounds = newNum / 100
            while (rounds > 0) {
                answer += "C"
                rounds--
            }
        }

        if (newNum === 1000) {
            answer += "M"
        }
        if (newNum > 1000) {
            let rounds = newNum / 1000
            while (rounds > 0) {
                answer += "M"
                rounds--
            }
        }
        return answer += this.toRoman(remainder)
    }

    fromRoman(roman){
        let edges = {
            "IX": 9,
            "IV": 4,
            "XC": 90,
            "XL": 40,
            "CM": 900,
            "CD": 400
        }

        let chars = roman.split('')
        let total = 0
        while(chars.length){
            let first = chars[0]
            let second = chars[1] ? chars[1] : null

            if(second){
                let pattern = first + second
                if(edges[pattern]){
                    total += edges[pattern]
                    chars.splice(0,2)
                }
                else {
                    total += this.symbols[chars[0]]
                chars.splice(0,1)
                }
            }
            else {
                total += this.symbols[chars[0]]
                chars.splice(0,1)
            }
        }
        return total
    }
}

let r = new RomanNumerals()

console.log(r.toRoman(140))
console.log(r.fromRoman("MDCLXIX"))