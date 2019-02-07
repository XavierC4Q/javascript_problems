/**
 * @function swapNodes
 * @description A binary tree is a tree which is characterized by one of the following properties:
 * It can be empty (null).
 * It contains a root node only.
 * It contains a root node with a left subtree, a right subtree, or both. These subtrees are also binary trees.
 * In-order traversal is performed as
 * Traverse the left subtree.
 * Visit root.
 * Traverse the right subtree.
 * For this in-order traversal, start from the left child of the root node and keep 
 * exploring the left subtree until you reach a leaf. When you reach a leaf, back up to 
 * its parent, check for a right child and visit it if there is one. 
 * If there is not a child, you've explored its left and right subtrees fully. 
 * If there is a right child, traverse its left subtree then its right in the same manner. 
 * Keep doing this until you have traversed the entire tree. 
 * You will only store the values of a node as you visit when one of the following is true:
 *it is the first node visited, the first time visited
 it is a leaf, should only be visited once
all of its subtrees have been explored, should only be visited once while this is true
it is the root of the tree, the first time visited
Swapping: Swapping subtrees of a node means that if initially node has left subtree L and right subtree R, then after swapping, the left subtree will be R and the right subtree, L.

For example, in the following tree, we swap children of node 1.

                                Depth
    1               1            [1]
   / \             / \
  2   3     ->    3   2          [2]
   \   \           \   \
    4   5           5   4        [3]
In-order traversal of left tree is 2 4 1 3 5 and of right tree is 3 5 1 2 4.

Swap operation:

We define depth of a node as follows:

The root node is at depth 1.
If the depth of the parent node is d, then the depth of current node will be d+1.
Given a tree and an integer, k, in one operation, we need to swap the subtrees of all 
the nodes at each depth h, where h ∈ [k, 2k, 3k,...]. In other words, if h is a multiple of k, swap the left and right subtrees of that level.

You are given a tree of n nodes where nodes are indexed from [1..n] and it is rooted 
at 1. You have to perform t swap operations on it, and after each swap operation print 
the in-order traversal of the current state of the tree.

Function Description

Complete the swapNodes function in the editor below. It should return a two-dimensional 
array where each element is an array of integers representing the node indices of an 
in-order traversal after a swap operation.

swapNodes has the following parameter(s): 
@param {array} indexes: an array of integers representing index values of each , 
beginning with , the first element, as the root. 
@param {array} queries: an array of integers, each representing a  value.
 */



/**
 * 
 * STRATEGY 1
 * 
 * BUILD AN OBJECT WITH THE VALUES AT EACH DEPTH
 * YOU START AT THE TOP LEAVES OF THE TREE. IT WILL BE ASSUMED EACH LEAF HAS ITS OWN
 * SUBLEAF.
 * THIS MEANS FOR EVERY NODE, IT CAN HAVE UP TO TWO CHILDREN
 * SO THE ASSUMED NEXT DEPTH WILL BE THE NUMBER OF SELECTED LEAVES TIMES 2
 * 
 * IN THIS PROBLEM, A PAIR OF LEAVES IS REPRESENTED BY EACH INDEX OF THE ARRAY.
 * 
 * NOW THE FUN PART. YOU HAVE ASSUMED THAT EACH LEAF HAS ITS OWN LEAVES
 * WHICH MEANS THE MAXIMUM NUMBER OF NODES ON THE NEXT LEVEL IS LEAF * 2
 * 
 * SO NOW YOU MUST ACCOUNT FOR NULL LEAVES, WHICH WOULD HAVE NO CHILDREN
 * EVERYTIME YOU ENCOUNTER A -1, THAT MEANS THE NEXT DEPTH IS LACKING ONE SUBTREE
 * 
 * SO THE SIZE OF THE NEXT DEPTH IS THE NUMBER OF NODES ON YOUR CURRENT DEPTH * 2 - THE NUMBER OF NULL LEAVES
 * 
 * KNOWING THIS, YOU CAN BUILD OUT THE DEPTHS OF THE TREE, SPLICING THE NEXT
 * LEAVES BASED ON THE NUMBER OF NULL LEAVES. PLACE EACH SET AT ITS OWN DEPTH
 * IN AN OBJECT AND THEN PERFORM THE SWAP. 
 * 
 */

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BT {
    constructor(){
        this.root = new Node(1)
    }

    
}

function buildTree(depths){
    let binaryTree = new BT()
    let depthsArray = []
    let end = Math.max(...Object.keys(depths).map(k => Number(k))) - 1

    for(let start = 2; start <= end; start++){
        depthsArray = depthsArray.concat(depths[start])
    }
    
    let start = depthsArray.splice(0,1)
    let nextNodes = []

      

    return binaryTree
}


function swapNodes(indexes, queries) {
    let depths = {}
    let currentDepth = 2
    
    let leaves = indexes.splice(0, 1)
    let next = leaves.length * 2

    while (leaves.length) {
        depths[currentDepth] = leaves
        leaves.forEach(l => {
            if (l[0] === -1) {
                next--
            }
            if (l[1] === -1) {
                next--
            }
        })
        leaves = indexes.splice(0, next)
        next = leaves.length * 2
        currentDepth++
    }

    queries.forEach(q => {
        for (key in depths) {
            if (key % q === 0) {
                if (depths[Number(key) + 1]) {
                    depths[Number(key) + 1].forEach(l => {
                        let temp = l[0]
                        l[0] = l[1]
                        l[1] = temp
                    })
                }
            }
        }
        let tree = buildTree(depths)
    })
    
}

swapNodes(
    [
        [2, 3],
        [4, -1],
        [5, -1],
        [6, -1],
        [7, 8],
        [-1, 9],
        [-1, -1],
        [10, 11],
        [-1, -1],
        [-1, -1],
        [-1, -1]

    ],
    [2, 4]
)