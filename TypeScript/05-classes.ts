interface counterInterface {
    count: number
}

interface counterInterfaceMethods {
    increment: () => void,
    decrement: () => void,
    print: () => number,
}

class Counter implements counterInterface, counterInterfaceMethods{
    constructor(public count: number = 0){
        this.count = count;
    }
    decrement(){
        if(this.count==0) return;
        this.count-=1;
    }
    increment(){
        this.count+=1;
    }
    print(){
        console.log(this.count);
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.print();
counter.decrement();
counter.print();
counter.decrement();
counter.decrement();
counter.print();