//* Static 

class Counter{
 static count: number = 0;

    increment() {
        return Counter.count = Counter.count +1
        //return (this.count += 1)
    }

}

const obj1 = new Counter();
const obj2 = new Counter();
console.log(obj1.increment())
console.log(obj1.increment())

console.log(obj2.increment())
console.log(obj2.increment())
console.log(obj2.increment())
