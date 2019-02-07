class Node {
    constructor(v){
        this.val = v
        this.left = null
        this.right = null
    }
}


class BST {
    constructor(){
        this.root = null
    }

    push(v){ 
        if(!this.root){
            this.root = new Node(v)
        }
        else {
            let current = this.root
            while(current){
                if(current.val > v && current.left === null){
                    current.left = new Node(v)
                    return this
                }
                if(current.val > v && current.left){
                    current = current.left
                }
                if(current.val <= v && current.right === null){
                    current.right = new Node(v)
                    return this
                }
                if(current.val <= v && current.right){
                    current = current.right
                }
            }
        }
    }

    goLeft(){
        let current = this.root
        if(!current){
            return null
        }
        while(current.left){
            current = current.left
        }
        return current
    }
}

let x = new BST()
x.push(210)
x.push(180)
x.push(170)
x.push(181)
x.push(145)
console.log(x.root.left.left)


