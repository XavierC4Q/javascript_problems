/**
 * @function lca
 * @param {rootNode} root 
 * @param {*} a 
 * @param {*} b
 * @returns {node}
 * @description Finds the lowest common ancestor between two nodes.
 * 
 *  
 */

const dfs = (root, target) => {
    let left = []
    let right = []

    let current = root 

    if(!current){
        return
    }

    if(!current.left){
        return left
    }

    if(!current.right){
        return right
    }

    if(current.left && current.value == target){
        left.push(current.value)
        left = left.concat(dfs(current.left, target))
    }

    if(current.right && current.value !== target){
        right.push(current.value)
        right = right.concat(dfs(current.right, target))
    }
}

const lca = (root, a, b) => {

}