function allSums(arr1, arr2, target) {

    function sums(a1, a2, t, x, arr) {
        
        let long;
        let short;
        let remainder;

        let results = []

        switch (a1.length > a2.length) {
            
            case true:
                long = a1
                short = a2
                remainder = al.slice(long.length - short.length + 1)
                break;
            case false:
                long = a2
                short = a1
                remainder = a2.slice(long.length - short.length + 1)
                break;
        }
        
        let orginalT = t

        if(t === 0 && !remainder.length){
            results.push(arr)
            return results
        }
        
        if (t === 0 && remainder.length) {
            
            results = results.concat(sums(remainder, short, orginalT, 0, arr))
        }

        for (let i = 0; i < short.length; i++) {
            
            if (short[i] + long[i] <= t) {
                results = results.concat(sums(a1, a2, t - (short[i] + long[i]), x, arr.concat([long[i], short[i]])))
            }
        }


        return results

    }


    return [].concat(sums(arr1, arr2, target, 0, []))
}


let a = [2, 3, 1, 4, 5]
let b = [1, 7, 3, 9, 8]

console.log(allSums(a, b, 3))