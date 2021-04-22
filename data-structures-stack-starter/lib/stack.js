// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
        this.last=null;
    }

    push(value){
        let newNode=new Node(value);
        if(!this.length){
            this.top=newNode;
            // this.length++;
        }else{
            this.last=this.top;
            this.top=newNode;
            // this.length++;
        }
        return ++this.length;
    }
}

let stack1= new Stack();
console.log(stack1.push(1));


exports.Node = Node;
exports.Stack = Stack;
