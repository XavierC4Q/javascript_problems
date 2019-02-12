/**
 * @description 
 * Binary Tree.
 * A binary tree is a tree which is characterized by one of the following properties:
 * It can be empty (null).
 * It contains a root node only.
 * It contains a root node with a left subtree, a right subtree, or both. 
 * These subtrees are also binary trees.
 */

 class Node {
     constructor(value){
         this.value = value
         this.left = null
         this.right = null
     }
 }

class BinaryTree {
    constructor(value){
        this.root = new Node(value)
    }
}

let a = new BinaryTree(100)
a.root.left = new BinaryTree(1)
a.root.right = new BinaryTree(2)
a.root.left.root.left = new BinaryTree(3)
a.root.left.root.right = new BinaryTree(4)
a.root.right.root.left = new BinaryTree(5)
a.root.right.root.right = new BinaryTree(6)
a.root.left.root.left.root.left = new BinaryTree(7)
a.root.left.root.left.root.right = new BinaryTree(8)
a.root.right.root.left.root.left = new BinaryTree(9)
a.root.right.root.left.root.right = new BinaryTree(10)
a.root.left.root.right.root.left = new BinaryTree(11)
a.root.left.root.right.root.right = new BinaryTree(12)
a.root.right.root.right.root.left = new BinaryTree(13)


/**
 * 
 * @param {object} root 
 * @description Depth first search of a binary tree.
 */

function dfs(root){
    let nodes = []
    if(!root){
        return null
    }   
    if(root.left){
        dfs(root.left.root)
    }
    
    if(root.right){
        dfs(root.right.root)
    }
}

dfs(a.root)

function dfsFindAllValues(root){
    let nodes = []
    if(!root){
        return nodes
    }
    if(root.left){
        nodes = nodes.concat(dfsFindAllValues(root.left.root))
    }
    
    nodes.push(root.value)

    if(root.right){
        nodes = nodes.concat(dfsFindAllValues(root.right.root))
    }
    
    if(!root.left && !root.right){
        return root.value
    }
    return nodes
}
dfsFindAllValues(a.root)


/**
 * TIME FOR A MORE CHALLENGING TREE
 */

let x = new BinaryTree({ name: 'Xavier', id: 1 })
x.root.left = new BinaryTree({ name: 'Paul', id: 2 })
x.root.right = new BinaryTree({ name: 'Monique', id: 3 })
x.root.left.root.left = new BinaryTree({ name: 'Elon', id: 4 })
x.root.left.root.right = new BinaryTree({ name: 'Jackson', id: 5 })
x.root.right.root.left = new BinaryTree({ name: 'Porche', id: 6 })
x.root.right.root.right = new BinaryTree({ name: 'Vulture', id: 7 })
x.root.left.root.left.root.left = new BinaryTree({ name: 'Rachel', id: 8 })
x.root.left.root.left.root.right = new BinaryTree({ name: 'Widow', id: 9 })
x.root.left.root.right.root.left = new BinaryTree({ name: 'Freg', id: 10 })
x.root.left.root.right.root.right = new BinaryTree({ name: 'Olga', id: 11 })
x.root.right.root.left.root.left = new BinaryTree({ name: 'Matthew', id: 12 })
x.root.right.root.left.root.right = new BinaryTree({ name: 'Oliver', id: 13 })
x.root.right.root.right.root.left = new BinaryTree({ name: 'Helen', id: 14 })


function bfs(root){
    let visited = []
    let values = []
    let current = root 

    while(current){
        if(current.left){
            visited.push(current.left.root)
        }
        if(current.right){
            visited.push(current.right.root)
        }
        values.push(current.value)

        current = visited.shift()
    }

    return values
}


function bfsWithCallback(root, cb){
    let visited = []
    let values = []
    let current = root 

    while(current){
        if(current.left){
            visited.push(current.left.root)
        }
        if(current.right){
            visited.push(current.right.root)
        }
        
        current = visited.shift()
    }

    return values
}


let testy = new BinaryTree(3)
testy.root.left = new Node(9)
testy.root.right = new Node(20)
testy.root.left.left = new Node(null)
testy.root.left.right = new Node(null)
testy.root.right.left = new Node(15)
testy.root.right.right = new Node(7)


var maxDepth = function(root) {
    if (!root){
        return 0
    }
    
    if (!root.left && !root.right) {
        return 1
    }
    
    let current = root
    let nodes = []
    let depths = []

    current.level = 1

    while(current){
        if(current.left){
            current.left.level = current.level + 1
            nodes.push(current.left)
        }
        if(current.right){
            current.right.level = current.level + 1
            nodes.push(current.right)
        }
        depths.push(current.level)
        current = nodes.shift()
    }

    return Math.max(...depths)
};

console.log(maxDepth(testy.root))