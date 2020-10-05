//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor() {
    this.validActionList = ["look", "stats", "inv", "where"]; //inv kill fight move walk goto etc etc
  }

  checkValidAction(checkActionString) { //given the valid actions does the string given exist as an action
    switch(checkActionString) {
      case "look": //display command
        console.log("display the area");
        break;
      case "stats": //display command
        console.log("display stats");
        break;
      case "inv": //display command
        console.log("display inv");
        break;
      case "where": //display command
        console.log("display paths");
        break;
      case "get": //inventory command
        console.log("get into inv");
        break;
      case "drop": //inventory command
        console.log("drop from inv");
      case "attack": //interaction command
        console.log("attack entity");
      case "talk": //interaction command
        console.log("talk to entity");
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
    console.log(locationObject.furnitureList);
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
