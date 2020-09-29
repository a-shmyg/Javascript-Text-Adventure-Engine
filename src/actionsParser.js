//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor(validActionList) {
    this.validActionList = [];
  }

  outputValidActions() {
    console.log(this.validActionList);
  }
}
