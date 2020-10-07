"use strict";

console.log("hello world");
document.addEventListener("DOMContentLoaded", main);


function main() {
  let playerOne = new Player("ana", {health:10, armour:0, damage:1}, [], "testRoom");
  let testRoom = new Location("testRoom", "welcome to the jungle");
  let dragon = new NPC("dragon", {health:50, armour:25, damage:12}, ["gold"], true);
  let sword = new Weapon("sword", 5, 100);
  let shield = new Armour("shield", 10, 50);
  let stoneTablet = new Furniture("stone tablet");

  playerOne.outputCharInfo();

  testRoom.addItemToLocation(sword);
  testRoom.addItemToLocation(shield);
  testRoom.addCharacterToLocation(dragon);
  testRoom.addFurnitureToLocation(stoneTablet);


  testRoom.listEntities();

  /*let dragonEvent = new BranchEvent("dragon", dragonDialogue);
  dragonEvent.initialiseDialogueTree();*/

  let actionsParser = new ActionParser();
  //checking the parsing of command
  actionsParser.checkDisplayCommand("look");
  actionsParser.checkDisplayCommand("stats");
  actionsParser.checkValidAction("get", "something");

  actionsParser.parseUserInputString("get thing");
  actionsParser.parseUserInputString("drop thing");
  actionsParser.parseUserInputString("invalid action 1");
  actionsParser.parseUserInputString("invalid action2");

  //checking the object checks
  actionsParser.checkItems("sword", testRoom);
  actionsParser.checkFurniture("stone tablet", testRoom);
  actionsParser.checkCharacters("dragon", testRoom);
  actionsParser.checkValidObject("stone tablet", testRoom);
  actionsParser.checkValidObject("dragon", testRoom);
  actionsParser.checkValidObject("sword", testRoom);
  actionsParser.checkValidObject("nothing", testRoom);


  /*actionsParser.checkValidObject("sword", testRoom);
  actionsParser.checkValidObject("dragon", testRoom);
  actionsParser.checkValidObject("stone tablet", testRoom);
  actionsParser.checkValidObject("not a thing", testRoom);*/
  //let formatOutput = new FormatOutput();
  //formatOutput.initialiseFrameInput();

}
