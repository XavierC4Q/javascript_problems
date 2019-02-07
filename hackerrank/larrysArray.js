/**
 * @function checkSorted
 * @param {number[]} A 
 * @param {number} start
 * @description Takes an array and starting number. Checks if array is sorted
 * Returns the index of the misplaced number or -1 if sorted.
 * 
 * 
 * @function findNextNumber
 * @param {number[]} A
 * @param {number} start
 * @param {number} target
 * @description Finds the index of the target number. Starting from the start point in A
 * Returns NO if the target is outside a 3 number sequence AND at the end of A 
 * OR the target is somehow not present. Returns index of target if found.
 * 
 * 
 * @function rotate 
 * @param {number[]} A 
 * @param {number} start
 * @description Performs a three index rotate of A from index of start
 * 
 * 
 * @function larrysArray
 * @param {number[]} A 
 * @description Checks if the array is sorted. If not, rotate and array over and over
 * until sorted (YES) or impossible to sort (NO).
 * 
 * 
 * 
 * THIS SOLUTION TIMES OUT ON HACKERRANK. FOUND THE ANSWER BY JUST USING AN
 * INSERTION SORT AND COUNTING THE SWAPS. CREDITS TO THE HACKERRANK COMMENTS.
 */
function checkSorted(A, start){
    for(let a = start; a < A.length; a++){
        if(A[a] !== a + 1) return a;
    }
    return -1
}

function findNextNumber(A, start, target){
    for(let b = start; b < A.length; b++){
        let [x,y,z] = [A[b], A[b + 1], A[b + 2]]

        if(!y || !z) return 'NO';

        if(x === target || y === target || z === target){
            return b
        } 
    }
    return 'NO'
}


function rotate(A, start){
    let a = A[start]
    let b = A[start + 1] ? A[start + 1] : null
    let c = A[start + 2] ? A[start + 2] : null

    if(!b || !c) return 'NO';

    let [tempA, tempB, tempC] = [a,b,c]

    A[start] = tempB
    A[start + 1] = tempC
    A[start + 2] = tempA
    
    return A
}

function larrysArray(A){
    let startingPoint
    let isSorted = checkSorted(A, 0)

    while(isSorted !== -1){
        startingPoint = isSorted
        let target = startingPoint + 1
        let findStartOfSequence = findNextNumber(A, startingPoint, target)
        
        if(findStartOfSequence === 'NO') return 'NO';

        A = rotate(A, findStartOfSequence)
        
        if(A === 'NO') return 'NO';

        isSorted = checkSorted(A, startingPoint)
    }
    
    return 'YES'
}

 console.log(larrysArray([3,4,5,2,1]))