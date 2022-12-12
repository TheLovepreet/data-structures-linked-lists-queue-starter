// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr) {
            if(curr.next == null){
                curr.next = newNode;
                this.length++;
                return this;
            }
            curr = curr.next;
        }
    }

    removeFromHead() {
        // Remove node at head
        if(this.head == null){
            return undefined;
        }
        this.head = this.head.next;
        this.length--;
        return this.head;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(this.head == null){
            return undefined;
        }
        let current = this.head;
        while(current !== null){
            if(this.length == 1){
                this.head = null;
                this.length--;
            }
            else if(current.next.next == null){
                current.next = null;
                this.length--;
                
                return this;
            }
            current = current.next;
        }

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

    print() {
        // Print out the linked list
        if(this.head == null){
            return '';
        }
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
