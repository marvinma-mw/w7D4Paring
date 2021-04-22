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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
    } else {
    newNode.next = this.top;
      this.top = newNode;
    }
    return ++this.length;
  }

  pop() {
    /*
    3) Should reassign the top pointer to the node just below the top node for stacks of size two or greater
    4) Should decrement the stack's length by one each time a node is removed from the stack
    5) Should return the value of the node removed from the stack
        const oldHead = this.head;
        const newHead = oldHead.next;
        this.head = newHead;
      */
    if (this.length === 0) {
      return null;
    }
    const oldTop = this.top;
    this.top = this.top.next;

    // if (this.top === this.last) {
    //   this.last = null;
    // //   this.length--;
    // }
    // if (this.length > 2) {
    //   const oldTop = this.top;
    this.length--;
    // }
    // this.top = this.top.next;
    return oldTop.value;
  }
}

let stack1 = new Stack();
console.log(stack1.push(1));
console.log(stack1.push(2));
console.log(stack1.push(3));
console.log(stack1.pop());

exports.Node = Node;
exports.Stack = Stack;
