"use strict";

console.log("hello world");

let actionsParser = new ActionParser();
let playerOne = new Player("ana", {health:10, armour:0, damage:1}, [], "testRoom");
let testRoom = new Location("testRoom", "welcome to the jungle", [], [], []);
let dragon = new NPC("dragon", {health:50, armour:25, damage:12}, ["gold"], true);
let sword = new Weapon("sword", 5, 100);
let shield = new Armour("shield", 10, 50);

playerOne.outputCharInfo();

testRoom.addItemToLocation(sword);
testRoom.addItemToLocation(shield);
testRoom.addCharacterToLocation(dragon);

testRoom.listEntities();
