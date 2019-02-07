class MinHeap {
    constructor(){
        this.heap = [null]
    }

    insert(v){
        if(this.heap.length < 2){
            this.heap.push(v)
        } else {
            this.heap.push(v)
            // FIND THE PARENT TO THE VALUE YOU JUST PUSHED
            // HEAP PARENT IS ALWAYS THE CURRENT INDEX DIVIDED BY 2 ROUNDED DOWN
            let current = this.heap.length - 1
            let parent = Math.floor(current / 2)
            // WHILE THERE IS A PARENT AND THE PARENT IS LESS THAN THE CURRENT POSITION VALUE
            while(this.heap[parent] && this.heap[parent] > this.heap[current]){
                // SWAP PARENT WITH CHILD IF PARENT IS LESS THAN CHILD
                [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]
                current = parent 
                parent = Math.floor(current / 2) 
            }
            return this.heap
        }
    }

    remove(){
        if(this.heap.length < 3){
            let result = this.heap.pop()
            this.heap[0] = null 
            return result
        }
        // GRAB TOP OF HEAP, THE MINIMUM VALUE
        const top = this.heap[1]
        // REMOVE LAST THING IN HEAP AND MOVE IT TO THE FRONT
        this.heap[1] = this.heap.pop()
        // GOAL NOW IS TO BUBBLE THE POPPED ITEM DOWN UNTIL IT IS IN PLACE
        let start = 1

        let [leftChild, rightChild] = [2 * start, 2 * start + 1]

        let child = this.heap[rightChild] && this.heap[rightChild] <= this.heap[leftChild] ? rightChild : leftChild
        // BUBBLE CHILD DOWN UNTIL IN PLACE
        while(this.heap[child] && this.heap[start] >= this.heap[child]){
            let current = this.heap[start]
            let currentChild = this.heap[child]

            this.heap[child] = current 
            this.heap[start] = currentChild

            start = child 
            leftChild = 2 * start 
            rightChild = 2 * start + 1

            child = this.heap[rightChild] && this.heap[rightChild] <= this.heap[leftChild] ? rightChild : leftChild
        }

        return top
    }
}

let x = new MinHeap()

x.insert(2)
x.insert(3)
x.insert(5)
x.insert(4)
x.insert(8)
x.insert(7)
x.insert(6)

x.remove()

console.log(x)