"use strict";

console.log("hello world");
document.addEventListener("DOMContentLoaded", main);


function main() {
  let playerOne = new Player("ana", {health:10, armour:0, damage:1}, "testRoom");
  let testRoom = new Location("testRoom", "welcome to the jungle");
  let dragon = new NPC("dragon", {health:50, armour:25, damage:12}, true);
  let sword = new Weapon("sword", 5, 100);
  let shield = new Armour("shield", 10, 50);
  let stoneTablet = new Furniture("stone_tablet");

  playerOne.outputCharInfo();

  testRoom.addItemToLocation(sword);
  testRoom.addItemToLocation(shield);
  testRoom.addCharacterToLocation(dragon);
  testRoom.addFurnitureToLocation(stoneTablet);

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

  dragon.addToInventory(new Item("gold_pouch", 0, 100));
  dragon.listInventory();
  dragon.removeFromInventory("gold_pouch");
  dragon.listInventory();

  

  //let formatOutput = new FormatOutput();
  //formatOutput.initialiseFrameInput();

}
