// 트럭이 들어가고 나가는 것 : queue
// 전체 기록: stack
class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
    this.totalWeight = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
    this.totalWeight += item.truck_weight;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    this.items.shift();
    this.tailIndex--;
    this.totalWeight -= item.truck_weight;
    return item;
  }
  decreaseTime(index){
    this.items[index].count -= 1;
  }
  firstCount(){
    return this.items[this.headIndex].count;
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let queue = new Queue();
    let truckWeights = truck_weights;
    
    const enter = () =>{
        queue.enqueue({'truck_weight':truckWeights[0], 'count': bridge_length});
        truckWeights.shift();
    }
    
    const decreaseCount = () => {
        for(let i = 0; i < queue.size(); i++) {
            if(queue.items[i].count > 1) {
                queue.decreaseTime(i)
            } else {
                queue.dequeue();
                i--;
            };
        };
    }
    
    while(truckWeights.length){ 
        answer += 1;
        if(weight - queue.totalWeight >= truckWeights[0]){
            enter()
            decreaseCount()
        }else{
            decreaseCount()
        }
    }
    
    while(queue.size()){
      answer += 1;
      decreaseCount()
    }
    return answer + 1;
}