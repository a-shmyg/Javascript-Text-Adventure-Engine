//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor(validActionList) {
    this.validActionList = []; //inv kill fight move walk goto etc etc
  }

  outputValidActions() {
    console.log(this.validActionList);
  }


}
