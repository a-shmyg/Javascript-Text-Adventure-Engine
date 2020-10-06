//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor() {
    this.validActionList = ["look", "stats", "inv", "where"]; //inv kill fight move walk goto etc etc
    this.locationObject;
    this.checkValidAction = this.checkValidAction.bind(this);
  }

  parseUserInputString(userInputString) { //is the string user gave valid ie correct number of words etc

  }

  checkValidAction(actionString) { //given the valid actions does the string given exist as an action
    switch(actionString) {
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
      case "goto": //interaction command
        console.log("go to location X");
      default:
        console.log("invalid action");
        break;
    }
  }

  setCurrentLocation(locationObject) {
    this.locationObject = locationObject;
  }

  lookCommand() {

  }

  statsCommand() {

  }

  invCommand() {

  }



  checkValidObject(checkObjectExists, locationObject) { //given a room entity and list of objects does it exist
    if (checkFurniture() && checkItems() && checkCharacters()) {
      return true;
    }
    return false;
  }

  checkFurniture(furnitureName, locationObject) {
    if (locationObject.getFurnitureByName(furnitureName)) {
      return true;
    }
    return false;
  }

  checkItems(itemName, locationObject) {
    //
  }

  checkCharacters(characterName, locationObject) {
    //
  }

  checkInteraction() {
    //
  }

  outputValidActions() {
    console.log(this.validActionList);
  }

}
