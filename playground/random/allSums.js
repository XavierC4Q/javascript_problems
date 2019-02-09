function sum(arr, target){
    let results = []
    arr.sort()
    results = results.concat(combine(arr, target, 0, [], results))
    return results
}

function combine(arr, target, index, values, results){
    if(!target){
        results.push(values)
        return results
    }

    for(let x = index; x < arr.length; x++){
        if(x <= index && arr[x] !== arr[x - 1]){
            results = results.concat(combine(arr, target - arr[x], x + 1, values.concat(arr[x]), results))
        }
    }
    return results
}

console.log(sum([10,1,2,7,6,1,5], 8))