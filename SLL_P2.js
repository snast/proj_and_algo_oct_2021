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
    // time: O(1)
    // space: O(n), need 1 for new node
    addNodeToFront(val) {
        //add node to front and then return updated SLL
        var newNode = new SLLNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    // time: O(n)
    // space: O(n), no additional space
    printAll() {
        var curr = this.head;
        while(curr!= null) {
            console.log(curr.val);
            curr = curr.next;
        }
        return this;
    }

    // time: O(n)
    // space: O(n), no additional space
    isValueInSLL(val) {
        var runner = this.head;
        while(runner!=null) {
            // do something
            if(runner.val === val) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    // time: O(n), can save time if you have a pointer to last node, O(1)
    // space: O(n), need additional 1 for new node
    addNodeToBack(val) {
        //non empty list, go through list and add to the end
        if (this.head !=null) {
            var runner = this.head;
            while(runner.next != null) {
                runner = runner.next;
            }
            var newNode = new SLLNode(val);
            runner.next = newNode;
        } else {
            //empty list, create new node and set as head
            this.head = new SLLNode(val);
        }

        return this; // to chain maybe?
    }
}

var my_singly_linked_list = new SLL();
my_singly_linked_list.addNodeToBack(11);

console.log(my_singly_linked_list);
my_singly_linked_list.head = node1;
console.log(my_singly_linked_list);
my_singly_linked_list.addNodeToFront(67);
console.log(my_singly_linked_list);
my_singly_linked_list.printAll();
console.log(my_singly_linked_list.isValueInSLL(23)); //true
console.log(my_singly_linked_list.isValueInSLL(21)); //false
my_singly_linked_list.addNodeToBack(11);
my_singly_linked_list.printAll();

//O(n^2) runtime example
var n = 10;
var count = 1;
for (var i = 0; i<n; i++) {
    for(var j = 0; j<n; j++){
        console.log("Count " + count);
        count++;
    }
}



