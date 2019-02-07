/**
 * @function sameStructureAs
 * 
 * @param {array} other
 * @description An array that may or may not contain nested arrays
 * 
 * Complete the function/method (depending on the language) to return true/True when 
 * its argument is an array that has the same nesting structure as the first array.
 * For example:
 * // should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  
 * 
 * // should return false 
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  
 * 
 * // should return true
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 
 * 
 * // should return false
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
 * 
 * For your convenience, there is already a function 'isArray(o)' declared and 
 * defined that returns true if its argument is an array, false otherwise.
 */
function isArray(o) {
    return Array.isArray(o)
}

function flatten(arr) {
    let result = []
    if(!arr.length){
      return result
    }
    result = [...result, ...arr.splice(0,1)]
    return result.concat(...flatten(arr))
  }

function absoluteFlatten(arr) {
    let results = []
    for(x = 0; x < arr.length; x++){
      if(isArray(arr[x])){
        let flat = [...flatten(arr[x])]
        results = [...results,...flat]
      }
      else {
        results.push(arr[x])
      }
    }
    return flatten(results)
  }

Array.prototype.sameStructureAs = function(other){
    if(!isArray(other)){
        return false
    }
    if(this.length !== other.length){
        return false
    }
    for(let x = 0; x < this.length; x++){
        if(isArray(this[x])){
            if(!isArray(other[x])){
                return false
            }
            if(other[x].length !== this[x].length){
                return false
            }
        }
        if(isArray(other[x]) && !isArray(this[x])){
            return false
        }
    }
    return absoluteFlatten(this).length === absoluteFlatten(other).length
}
let v = [[1, 1, 1], [2, 1, 1]]
console.log(v.sameStructureAs([[1, 1, 1], [3, 4, 5]]))

