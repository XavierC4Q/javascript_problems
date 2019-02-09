function combine(arr, target, start, acc){
    let result = []
    if(target === 0){
        result.push(acc)
        return result
    }
    console.log(acc)
    
    for(let i = start; i < arr.length; i++){
        if(arr[i] <= target){
            acc = acc.concat(arr[i])
            let front = arr.splice(0, i)
            let rest = arr.splice(1)
            
            result = result.concat(combine(front.concat(rest), target - arr[i], i, acc))
        }
    }

    return result
}

function combinationSumTwo(arr, target){
    return combine(arr, target, 0, [])
}

console.log(combinationSumTwo([10,1,2,7,6,1,5], 8))