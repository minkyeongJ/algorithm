class MinHeap{
    consttructor(){
        this.items = [];
    }
    enqueue(nums){
        this.items = nums.sort((a,b) => a-b);
    }
    peek(){
        const item = this.items.shift();
        return item;
    }
    size(){
        const len = this.items ? this.items.length : 0
        return len;
    }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let answer = [];
    const minHeap = new MinHeap();
    minHeap.enqueue(nums);
    while(minHeap.size()){
        const first = minHeap.peek();
        const second = minHeap.peek();
        answer = [...answer, second, first];
    }
    return answer;
};