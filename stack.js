class Stack{
    constructor(){
        this.stack = [];
    }

    push(ele){
        this.stack.push(ele);
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek())
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop()
console.log(myStack.isEmpty());


