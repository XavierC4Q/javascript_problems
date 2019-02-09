function combine(arr, target, start, acc){
    let result = []
    if(target === 0){
        result.push(acc)
        return result
    }
    
    
    for(let i = start; i < arr.length; i++){
        if(target - arr[i] >= 0){
            let num = arr[i]
            let front = arr.slice(0, i)
            let rest = arr.slice(i + 1)
            let newArr = front.concat(rest)
            
            result = result.concat(combine(newArr, target - num, i, acc.concat(num)))
        }
    }

    return result
}

function combinationSumTwo(arr, target){
    let allSums = combine(arr, target, 0, [])
    let keys = {}

    for(s in allSums){
        let key = allSums[s].sort().join('')
        if(!keys[key]){
            keys[key] = allSums[s]
        }
    }

    return Object.values(keys)
}

console.log(combinationSumTwo([10,1,2,7,6,1,5], 8))