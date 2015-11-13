var Stack = function() {
  this.storage = [];

  this.push = function(value){
    this.storage.push(value);
  };

  this.pop = function(){
    return this.storage.pop();
  };

  this.size = function(){
    return this.storage.length;
  };
};

var Queue = function() {

  this.inbox = new Stack();
  this.outbox = new Stack();

  this.enqueue = function(value){
    this.inbox.push(value);
  };

  this.dequeue = function(){
    //copy over to outbox and then back
    var length = this.inbox.size(); //popping will change the size
    for(var i = 0; i < length; i++) {
      this.outbox.push(this.inbox.pop());
    }
    var result = this.outbox.pop();
    
    var outLength = this.outbox.size(); //popping will change the size
    for(var i = 0; i < outLength; i++) {
      this.inbox.push(this.outbox.pop());
    }
  };

  this.size = function(){
    return this.inbox.size();

  };
};
