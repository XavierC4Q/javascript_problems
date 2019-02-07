const insertionSort = (array) => {
    array.forEach((element, index) => {
        let current = element 
        let insert = index - 1
        
        while(insert >= 0 && array[insert] > current){
            array[insert + 1] = array[insert]
            insert--
        }
        array[insert + 1] = current
    });
    
    return array
}

insertionSort([1,3,4,2])