// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
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

///FIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.front = newNode;
      this.back = this.front;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.length) return null;
    let oldEnd = this.front;
    // if (this.length === 1) {
    //     let oldEnd = this.front.next
    //     oldEnd = this.back.next
    // }
    this.front = this.front.next;
    if (this.front === null) {
      this.back = null;
    }
    this.length--;
    return oldEnd.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
