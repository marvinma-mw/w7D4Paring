// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalueent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(value) {
        // let newNode = new Node(value);
        // let prevTail = this.tail;
        // prevTail.next = newNode;
        // this.tail = newNode;
        // if(!this.length){
        //     return null;
        // }
        // }else{
        //     this.tail = newNode.next;
        // }
        let newNode = new Node(value);
        let currVal;
     //   console.log(newNode.value);
        this.head=newNode;
        this.tail = newNode;
            currVal=this.head;
        this.length++;
        return ;

        // this.tail=this.tail.next;
    }

    // TODO: Implement the removeTail method here
    removeTail() {

    }

    // TODO: Implement the addToHead method here
    addToHead(value) {

    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, value) {

    }

    // TODO: Implement the insert method here
    insert(index, value) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
