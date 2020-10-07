"use strict";

console.log("hello world");
document.addEventListener("DOMContentLoaded", main);


function main() {
  let testRoom = new Location("testRoom", "welcome to the jungle");
  let testGoto = new Location("testGoto", "new place");
  let playerOne = new Player("ana", {health:10, armour:0, damage:1});
  let dragon = new NPC("dragon", {health:50, armour:25, damage:12}, true);
  let sword = new Weapon("sword", 5, 100);
  let shield = new Armour("shield", 10, 50);
  let stoneTablet = new Furniture("stone_tablet");

  playerOne.outputCharInfo();
  playerOne.setCurrentLocation(testRoom);
  dragon.setCurrentLocation(testRoom);

  testRoom.addItemToLocation(sword);
  testRoom.addItemToLocation(shield);
  testRoom.addCharacterToLocation(dragon);
  testRoom.addFurnitureToLocation(stoneTablet);
  testRoom.addPathToLocation(testGoto);

  //testRoom.listEntities();

  /*let dragonEvent = new BranchEvent("dragon", dragonDialogue);
  dragonEvent.initialiseDialogueTree();*/

  let actionsParser = new ActionParser();
  /*
  //checking the parsing of command
  actionsParser.checkDisplayCommand(playerOne, "look");
  actionsParser.checkDisplayCommand(playerOne,"stats");
  actionsParser.checkValidAction(playerOne,"get", "something");

  actionsParser.parseUserInputString(playerOne,"get thing");
  actionsParser.parseUserInputString(playerOne,"drop thing");
  actionsParser.parseUserInputString(playerOne,"invalid action 1");
  actionsParser.parseUserInputString(playerOne,"invalid action2");

  //checking the object checks
  actionsParser.checkItems("sword", testRoom);
  actionsParser.checkFurniture("stone_tablet", testRoom);
  actionsParser.checkCharacters("dragon", testRoom);
  actionsParser.checkValidObject("stone_tablet", testRoom);
  actionsParser.checkValidObject("dragon", testRoom);
  actionsParser.checkValidObject("sword", testRoom);
  actionsParser.checkValidObject("nothing", testRoom);
  */

  //testing inventory methods
  dragon.addToInventory(new Item("gold_pouch", 0, 100));
  dragon.addToInventory(new Item("silver_pouch", 0, 100));
  dragon.addToInventory(new Item("copper_pouch", 0, 100));
  dragon.listInventory();
  //dragon.removeFromInventory("gold_pouch");
  //dragon.listInventory();

  //testing action interface
  actionsParser.parseUserInputString(dragon, "inv");
  actionsParser.parseUserInputString(playerOne, "look");
  actionsParser.parseUserInputString(playerOne, "stats");
  actionsParser.parseUserInputString(playerOne, "get shield");
  actionsParser.parseUserInputString(playerOne, "inv");
  testRoom.listEntities();
  actionsParser.parseUserInputString(playerOne, "get sword");
  testRoom.listEntities();
  actionsParser.parseUserInputString(playerOne, "get nothing");
  actionsParser.parseUserInputString(playerOne, "drop shield");
  actionsParser.parseUserInputString(playerOne, "drop sword");
  testRoom.listEntities();
  actionsParser.parseUserInputString(playerOne, "inv");
  actionsParser.parseUserInputString(playerOne, "attack dragon");
  actionsParser.parseUserInputString(playerOne, "where");
  actionsParser.parseUserInputString(playerOne, "talk dragon");
  actionsParser.parseUserInputString(playerOne, "goto somewhere");
  actionsParser.parseUserInputString(playerOne, "goto testGoto");
  //testRoom.listEntities();
  //let formatOutput = new FormatOutput();
  //formatOutput.initialiseFrameInput();

}
