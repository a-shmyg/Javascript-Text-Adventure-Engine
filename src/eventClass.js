//events can be assigned to locations, characters, items
"use strict";

class Event {
  constructor(eventId, eventTrigger, eventOutcome) {

  }
}

class BranchEvent extends Event { //holds dialogie branches using tree structure
  constructor(eventId, eventTrigger, eventOutcome, branchDialogue) {
    super(eventId, eventTrigger, eventOutcome);
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

class DynamicEvent extends Event {
  constructor(eventId, eventOutcome, ) {
    super(eventId, eventOutcome, effect);

  }
}

class CombatEvent extends Event {
  constructor(playerObject, enemyObject, eventId, eventTrigger, eventOutcome) {
    super(eventId, eventTrigger, eventOutcome);
    this.playerObject = playerObject;
    this.enemyObject = enemyObject;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.childNodes = [];
  }
}
