/**
 * @function LinkedNode
 * @param {*} value 
 */

function LinkedNode(value){
    this.value = value 
    this.next = null
}

/**
 * @function LinkedList
 * @description Linked List made up of Linked Nodes.
 */

function LinkedList(){
    this.head = null
}

LinkedList.prototype = {
    push: function(value){
        let node = new LinkedNode(value)

        if(this.head === null){
            this.head = node
            return this.head
        }

        let current = this.head

        while(current.next){
            current = current.next
        }
        current.next = node
        return node
    },
    removeHead: function(){
        if(this.head === null){
            return null
        }

        let removed = this.head 
        this.head = this.head.next
        return removed
    },
    removeTail: function(){
        let current = this.head
        let next = current.next
        while(next.next){
            current = next 
            next = current.next
        }
        current.next = null 
        return next
    },
    peek: function(){
        return this.head
    },
    peekTail: function(){
        let current = this.head
        let next = current.next
        while(next.next){
            current = next 
            next = current.next
        }
        return next
    }
}


let a = new LinkedList()

a.push(19)

a.push(23)

a.push(14)

a.push(12)

a.push(55)

console.log(a.head)