//events can be assigned to locations, characters, items
"use strict";

class Branch { //holds dialogie branches using tree structure
  constructor(branchOwner, branchDialogue) {
    this.branchOwner = branchOwner;
    this.branchDialogue = branchDialogue;
  }

  initialiseDialogueTree() { //go thru branch array and build tree, left to right
    console.log(this.branchDialogue);
    let rootNode = new TreeNode(this.branchDialogue[0]);
    let currentLevel = 0;


  }

  printNodes() {

  }
}


class TreeNode {
  constructor(value) {
    this.value = value;
    this.childNodes = [];
  }
}

class Combat {
  constructor() {

  }
}
