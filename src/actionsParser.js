//actions interface for interaction with the world
"use strict";

class ActionParser {
  constructor() {
    this.checkValidAction = this.checkValidAction.bind(this);
  }

  parseUserInputString(commandOwner, userInputString) { //is the string user gave valid ie correct number of words etc
    var userStringArray = userInputString.split(" ");
    console.log(commandOwner.characterName+" is doing a command");

    if (userStringArray.length === 1) { //typically just to diplay info for player
      this.checkDisplayCommand(commandOwner, userStringArray[0]);

    } else if (userStringArray.length === 2) { //this is for interaction type commands
      this.checkValidAction(commandOwner, userStringArray[0], userStringArray[1]);

    } else {
      console.log("invalid string");
    }
  }

  checkDisplayCommand(commandOwner, displayCommand) {
    console.log("display command");
    switch(displayCommand) {
      case "look": //display command
        console.log("display the area");
        break;
      case "stats": //display command
        console.log("display stats");
        break;
      case "inv": //display command
        this.invCommand(commandOwner);
        break;
      case "where": //display command
        console.log("display paths");
        break;
      default:
        break;
    }
  }

  checkValidAction(commandOwner, actionString, objectString) { //given the valid actions does the string given exist as an action
    switch(actionString) {
      case "get": //inventory command
        console.log("get into inv");
        break;
      case "drop": //inventory command
        console.log("drop from inv");
        break;
      case "attack": //interaction command
        console.log("attack entity");
        break;
      case "talk": //interaction command
        console.log("talk to entity");
        break;
      case "goto": //interaction command
        console.log("go to location X");
        break;
      default:
        console.log("invalid action");
        break;
    }
  }

  checkValidObject(objectName, locationObject) { //given a room entity and list of objects does it exist, if so get ref to object
    if (this.checkFurniture(objectName, locationObject) || this.checkItems(objectName, locationObject) || this.checkCharacters(objectName, locationObject)) {
      console.log("found object in room");
      return true;
    }
    console.log("not found object in room");
    return false;
  }

  checkFurniture(furnitureName, locationObject) {
    if (locationObject.getFurnitureByName(furnitureName)) {
      return true;
    }
    return false;
  }

  checkItems(itemName, locationObject) {
    if (locationObject.getItemByName(itemName)) {
      return true;
    }
    return false;
  }

  checkCharacters(characterName, locationObject) {
    if (locationObject.getCharacterByName(characterName)) {
      return true;
    }
    return false;
  }

  lookCommand() {
    //list all entities in the room
  }

  statsCommand() {
    //player stats
  }

  invCommand(commandOwner) {
    console.log("displaying inventory");
    var characterInv = Object.entries(commandOwner.getCharacterInventory());
    //check it doesnt make the item object into array as well

    for (var i = 0; i < characterInv.length; i++) {
      console.log(characterInv[i][0]);
    }

  }
}
