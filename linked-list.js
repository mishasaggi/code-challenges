
var LinkedList = function(){
  this.list = {};
  this.list.head = null;
  this.list.tail = null;

  return list;
};

  LinkedList.prototype.addToTail = function(value){
    if(this.list.head === null && this.list.tail === null) {
      this.list.tail = Node(value);
      this.list.head = this.list.tail;
    } else {
      this.list.tail.next = Node(value);
      this.list.tail = this.list.tail.next;
    }
  };

  LinkedList.prototype.removeHead = function(){
    var result = this.list.head.value;
    var temp = this.list.head;
    delete this.list.head;
    this.list.head = temp.next;
    return result;
  };

  LinkedList.prototype.contains = function(target){
    this.list.search = list.head;
    if(this.list.tail.value === target) return true;
    while (this.list.search.next !== null) {
      if(this.list.search.value === target) return true;
      this.list.search = this.list.search.next;
     }
     return false;
  };

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
