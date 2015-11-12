
var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

  LinkedList.prototype.addToTail = function(value){
    if(this.head === null && this.tail === null) {
      this.tail = this.makeNode(value);
      this.head = this.tail;
    } else {
      this.tail.next = this.makeNode(value);
      this.tail = this.tail.next;
    }
  };

  LinkedList.prototype.removeHead = function(){
    if(this.head === this.tail){
      this.head = this.tail = null;
      return;
    }
    var result = this.head.value;
    var temp = this.head;
    delete this.head;
    this.head = temp.next;
    return result;
  };

  LinkedList.prototype.contains = function(target){
    this.search = this.head;
    if(this.tail.value === target) return true;
    while (this.search.next !== null) {
      if(this.search.value === target) return true;
      this.search = this.search.next;
     }
     return false;
  };
  
  LinkedList.prototype.makeNode = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };


