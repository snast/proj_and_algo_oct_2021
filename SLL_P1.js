class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var node1 = new SLLNode(23);
// console.log(node1);
var node2 = new SLLNode(81);
node1.next = node2;
// console.log(node1);

class SLL {
    constructor() {
        this.head = null;
    }
    addNodeToFront(val) {
        //add node to front and then return updated SLL
        var newNode = new SLLNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    printAll() {
        var curr = this.head;
        while(curr!= null) {
            console.log(curr.val);
            curr = curr.next;
        }
        return this;
    }
}

var my_singly_linked_list = new SLL();
console.log(my_singly_linked_list);
my_singly_linked_list.head = node1;
console.log(my_singly_linked_list);
my_singly_linked_list.addNodeToFront(67);
console.log(my_singly_linked_list);
my_singly_linked_list.printAll();


