class PriorityNode {
    constructor(v, p){
        this.value = v
        this.priority = p
        this.next = null
    }
}

class PriorityQueue {
    constructor(){
        this.front = null
    }

    insert(v, p){
        const newNode = new PriorityNode(v,p)
        if(this.front === null){
            this.front = newNode
        }
        else if(newNode.priority < this.front.priority){
            newNode.next = this.front
            this.front = newNode
        }
        else {
            let next = this.front

            while(next.next && next.priority < newNode.priority){
                next = next.next
            }
            newNode.next = next.next
            next.next = newNode
        }
    }

    remove(){
        let removed = this.front
        this.front = this.front.next
        return removed
    }
}


let x = new PriorityQueue()
