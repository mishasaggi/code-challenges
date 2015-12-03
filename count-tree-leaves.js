
var Tree = function(value){
  this.value = value;
  this.children = [];
  this.leaveCount = 0;
};

Tree.prototype.countLeaves = function () {
  //go over current node's children recursively and 
  //count only when current node's children array is empty
  if(this.children.length === 0) {
    //need to save one leaf at a time otherwise might get 
    //overwritten between recursion calls due to different scope
    this.leaveCount = 1;
  } else if(this.children.length > 0){
    //can't skip this assignment otherwise might 
    //incorrectly carry a 1 value to the next aggegation step
    this.leaveCount = 0;
    for(var i = 0; i < this.children.length; i++) {
       this.leaveCount += this.children[i].countLeaves();
    }
  }
  return this.leaveCount;
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

