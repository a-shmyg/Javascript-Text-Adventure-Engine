//deals with uploading the file itself to the game, may remove later
"use strict";

/*
STRUCTURE OF JSON file

WelcomeText

Locations:
  locationName
    Items
      Effect

    Furniture
      Events

    NPC
      Stats
      Inventory - private and can't be acessed from location unless dropped
      Events

    Paths

*/

gameFile = {
  WelcomeText:"Hello World",
  Locations: [{
    locationName: "dungeon",
    narrationText: "dark, scary and moist",
    characters: [{
      characterName:"dragon",
      characterStats: {health:50, armour:25, damage:12},
      characterInv: ["gold", "scales"],
      hostile: false,
      characterEvents: []
    }],
    items: [{
      itemType: "weapon",
      itemName: "stake",
      itemEffect: 5,
      itemValue: 2,
      itemEvents: []
    }],
    furniture: [{
      furnitureName: "chest",
    }],
    paths: ["woods", "cabin"]
  },
  {
    locationName: "cabin",
    narrationText: "big and wooden",
    characters: [],
    items: [],
    furniture: [],
    paths: ["dungeon"]
  },
  {
    locationName: "woods",
    narrationText: "lovely dark and deep",
    characters: [],
    items: [],
    furniture:[],
    paths: ["dungeon"]
  }],

  Events: {
    dialogue:[{
      dialogueOwner: "dragon",
      dialogueTree: ["hello", ["lets fight", "lets not fight"]],
      trigger: "dragon" //event for an entity can be triggered by acting on things other than that entity
    }],
    puzzles:[] //might not need this?
  }
}
