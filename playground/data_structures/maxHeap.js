class MaxHeap {
    constructor(){
        this.heap = [null]
    }

    insert(v){
        if(this.heap.length < 3){
            this.heap.push(v)
            return this.heap
        }

        this.heap.push(v)

        let current = this.heap.length - 1
        let parent = Math.floor(current / 2)

        while(this.heap[parent] && this.heap[parent] < this.heap[current]){
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]
            current = parent 
            parent = Math.floor(current / 2)
        }

        return this.heap
    }

    remove(){
        if(this.heap.length < 3){
            let removed = this.heap.pop()
            this.heap[0] = null 
            return removed
        }

        let removed = this.heap[1]
        this.heap[1] = this.heap.pop()

        let current = 1

        let [left, right] = [2 * current, 2 * current + 1]

        let child = this.heap[right] && this.heap[right] >= this.heap[left] ? right : left

        while(this.heap[child] && this.heap[current] <= this.heap[child]){
            let temp = this.heap[current]
            this.heap[current] = this.heap[child]
            this.heap[child] = temp
            current = child 
            left = 2 * current 
            right = 2 * current + 1

            child = this.heap[right] && this.heap[right] >= this.heap[left] ? right : left
        }

        return removed
    }

    peek(){
        return this.heap[1]
    }
}

let s = new MaxHeap()

s.insert(90)
s.insert(31)
s.insert(9)
s.insert(101)

s.insert(45)
s.insert(2)
s.insert(89)
s.insert(44)
s.insert(112)

s.insert(99)
s.insert(190)
s.insert(55)
s.insert(61)

s.remove()


console.log(s)