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
      case "look":
        this.lookCommand(commandOwner);
        break;
      case "stats":
        this.statsCommand(commandOwner);
        break;
      case "inv":
        this.invCommand(commandOwner);
        break;
      case "where":
        console.log("display paths");
        break;
      default:
        break;
    }
  }

  checkValidAction(commandOwner, actionString, entityName) { //given the valid actions does the string given exist as an action
    switch(actionString) {
      case "get": //inventory command
        this.getCommand(commandOwner, entityName);
        break;
      case "drop": //inventory command
        this.dropCommand(commandOwner, entityName);
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

  getCommand(commandOwner, entityName) {
    var currentLocation = commandOwner.getCurrentLocation();

    if (this.checkItems(entityName, currentLocation)) {
      console.log("adding to inventory");

      var itemToAdd = currentLocation.getItemByName(entityName);
      commandOwner.addToInventory(itemToAdd);

      console.log("removing from location");
      currentLocation.removeItemFromLocation(entityName);
    } else {
      console.log("you can't pick this up");
    }
  }

  dropCommand(commandOwner, entityName) {
    var currentLocation = commandOwner.getCurrentLocation();

    if (commandOwner.getInventoryItemByName(entityName)) {
      console.log("removing from inventory");

      var itemToDrop = commandOwner.getInventoryItemByName(entityName);
      commandOwner.removeFromInventory(entityName);

      console.log("adding to location");
      currentLocation.addItemToLocation(itemToDrop);

    } else {
      console.log("you can't drop this");
    }
  }

  lookCommand(commandOwner) {
    //list all entities in the room
    console.log("display entities in room");
    var currentLocation = commandOwner.getCurrentLocation();
    var locationFurniture = currentLocation.getLocationFurniture();
    var locationItems = currentLocation.getLocationItems();
    var locationCharacters = currentLocation.getLocationCharacters();

    for (const [key, value] of Object.entries(locationFurniture)) {
      console.log(key);
    }

    for (const [key, value] of Object.entries(locationItems)) {
      console.log(key);
    }

    for (const [key, value] of Object.entries(locationCharacters)) {
      console.log(key);
    }

  }

  statsCommand(commandOwner) {
    console.log("displaying stats");
    console.log("armour "+commandOwner.characterStats["armour"]);
    console.log("health "+commandOwner.characterStats["health"]);
    console.log("damage "+commandOwner.characterStats["damage"]);
  }

  invCommand(commandOwner) {
    console.log("displaying inventory");
    var characterInv = commandOwner.getCharacterInventory();
    //check it doesnt make the item object into array as well

    for (const [key, value] of Object.entries(characterInv)) {
      console.log(key);
    }

  }
}
