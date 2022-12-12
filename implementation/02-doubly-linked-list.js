// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.tail.next = newNode;
        newNode.next = null;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(this.length < 1){
            return undefined;
        }
        let oldHead = this.head.value;
        this.head = this.head.next;
        this.length--;
        if(this.length == 0){
            return oldHead;
        }
        this.head.prev = null;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length < 1){
            return undefined;
        }
        let oldtail = this.tail;
        this.tail = this.tail.prev;
        this.length--;
        return oldtail.value;
        
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.length < 1){
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length < 1){
            return undefined;
        }
        return this.tail.value;
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
