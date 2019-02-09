const allPermutations = (arr, start, end) => {
    const swap = (arr, one, two) => {
        [arr[one], arr[two]] = [arr[two], arr[one]]
        return arr
    }

    let result = []
    if(start === end){
        result = result.concat(arr)
        return result
    }
    else {
        let i = start
        while(i <= end){
            swap(arr, start, i)
            result.push(allPermutations(arr, start + 1, end))
            swap(arr, i, start)
            i++
        }
        return result
    }
}

allPermutations(['a', 'b', 'c'], 0, 2)