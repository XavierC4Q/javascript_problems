function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * NOT MINE
 * 
 * CREDITS DUE: https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/24md.html
 */
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    var prev = head;
    var cur  = head.next;

    while(prev != null && cur != null){
        
        var temp = prev.val;
        prev.val = cur.val;
        cur.val = temp;

        if(cur.next == null || cur.next.next == null) break;
        
        prev = cur.next;
        cur  = cur.next.next;     
    }   
    return head;
};

let x = new ListNode(1);
x.next = new ListNode(2);
x.next.next = new ListNode(3);
x.next.next.next = new ListNode(4);

console.log(swapPairs(x));
