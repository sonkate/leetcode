/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let current = head;
    while(list1 || list2){
        if(!list1){
            current.next = list2;
            break;
        }
        if(!list2){
            current.next = list1;
            break;
        }
        if(list1.val > list2.val){
            current.next = list2;
            list2 = list2.next;
        }else{
            current.next = list1;
            list1 = list1.next;
        }
        if (current.next != null) current = current.next;
    }
    head = head.next;
    return head;
};

// Testing the function with some example cases
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log("running test")
console.log(list1);
console.log(JSON.stringify(mergeTwoLists(list1, list2))); // Output: {"val": 1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":null}}}}}
