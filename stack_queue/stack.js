class Stack {
    constructor() {
        this.item = []
    }
    push(element) {
        this.item.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return `stack is empty`
        }else{
          return   this.item.pop()
        }
    }

    isEmpty(){
        return this.item.length ===0
    }
    print(){
        console.log(this.item.toString())
    }


}

const stack=new Stack()

stack.push(10);
stack.push(20);
stack.push(30);
// console.log("Peek element: " + stack.peek());  // Output: 30
 console.log("Pop element: " + stack.pop());    // Output: 30
// console.log("Stack size: " + stack.size());    // Output: 2
stack.print();  // Output: 10,20