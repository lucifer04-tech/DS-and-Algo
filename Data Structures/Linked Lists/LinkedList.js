console.log('Linked List learning');

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

 class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    //adding at the end
    append(value){  

        let newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }
    //adding at the start
    prepend(value){
        let newNode = new Node(value)

        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array
    }

    //adding node to a particular value

    // if (index === 0) {
    //     this.prepend(value);
    //     return this.printList();
    //   }
    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        const newNode = new Node(value)

        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        // return this.printList()
    }

    remove(index){

        if(index >= this.length){
            let lastNode = this.traverseToIndex(this.length - 2)
            lastNode.next = null;
            this.length--;
        }
        
        else {
            let leader = this.traverseToIndex(index-1);
            const holdingPointer = leader.next.next;
            leader.next = holdingPointer
            this.length--;}
    }

    traverseToIndex(index){
        //check for params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    


 }

 const myLinkedList = new LinkedList(10);
 myLinkedList.append(5)
 myLinkedList.append(15)
 myLinkedList.prepend(13)
 myLinkedList.prepend(90)

 myLinkedList.insert(2, 199)
 myLinkedList.insert(20, 909)
 myLinkedList.remove(3)
 myLinkedList.remove(3)
 const list = myLinkedList.printList()

// console.log(myLinkedList)
 console.log(list)