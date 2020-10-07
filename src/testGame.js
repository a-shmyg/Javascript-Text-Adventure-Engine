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
                          //left branch        //right branches
  /*let dragonDialogue = ["hi", ["yes", ["possibly", "maybe"]], ["no", ["probs not", "lets not"]]];
  let dragonEvent = new BranchEvent("dragon", dragonDialogue);
  dragonEvent.initialiseDialogueTree();*/

  let actionsParser = new ActionParser();
  actionsParser.checkValidAction("look");
  actionsParser.checkValidAction("stats");
  actionsParser.checkValidAction("get something");
  actionsParser.parseUserInputString("get thing");
  actionsParser.parseUserInputString("drop thing");
  actionsParser.parseUserInputString("invalid action 1");
  actionsParser.parseUserInputString("invalid action2");
  //let formatOutput = new FormatOutput();
  //formatOutput.initialiseFrameInput();

}
