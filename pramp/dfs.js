class Node {
    constructor(value) {
        this.id = value
        this.left = null
        this.right = null
    }
}

let tree = new Node('A')
tree.left = new Node('B')
tree.right = new Node('E')
tree.left.left = new Node('C')
tree.left.right = new Node('D')
tree.right.left = new Node('F')
tree.right.right = new Node('G')


function printNode(node) {
    let res = []
    if (node) {
        console.log(node.id)
        res.push(node.id)
        res = [...res, ...printNode(node.left), ...printNode(node.right)]
    }

    return res
}

console.log(printNode(tree))