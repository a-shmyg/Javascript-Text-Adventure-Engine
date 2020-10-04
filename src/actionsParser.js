//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor() {
    this.validActionList = ["look", "stats", "inv", "where"]; //inv kill fight move walk goto etc etc
  }

  checkValidAction(checkActionString) { //given the valid actions does the string given exist as an action
    switch(checkActionString) {
      case "look":
        break;
      case "stats":
        break;
      case "inv":
        break;
      case "where":
        break;
      case "get":
        break;
      case ""
      default:
        console.log("invalid action");
        break;
    }
  }

  checkValidObject(checkObjectExists, locationObject) { //given a room entity and list of objects does it exist
    if (checkFurniture() && checkItems() && checkCharacters()) {
      return true;
    }
    return false;
  }

  checkFurniture(checkFurnitureExists, locationObject) {
    //
  }

  checkItems(checkItemExists, locationObject) {
    //
  }

  checkCharacters(checkCharacterExists, locationObject) {
    //
  }

  checkInteraction() {
    //
  }

  outputValidActions() {
    console.log(this.validActionList);
  }

}
