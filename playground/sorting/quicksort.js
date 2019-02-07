const quickSort = (arr) => {
    let left = []
    let right = []
    if(arr.length < 2){
        return arr
    }
    let pivot = arr.shift()

    while(arr.length){
        let value = arr.shift()
        if(value < pivot){
            left.push(value)
        }
        else {
            right.push(value)
        }
    }

    return  [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([12,2,7,8,4,41,1,11,2,78,4,3,9,22,4,9]))