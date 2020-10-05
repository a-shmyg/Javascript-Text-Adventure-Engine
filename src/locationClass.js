//Location class holds items and characters, and provides valid paths to other locationStory
//class deals with construction and initialisation of objects held by location instance
"use strict";

class Location {
  constructor(locationName, locationNarration) {
    this.locationName = locationName;
    this.locationNarration = locationNarration;
    this.characterMap = {};
    this.itemMap = {};
    this.furnitureMap = {};

  }

  addCharacterToLocation(newCharacter) {
    this.characterMap[newCharacter.characterName] = newCharacter;
  }

  addItemToLocation(newItem) {
    this.itemMap[newItem.itemName] = newItem;
  }

  addFurnitureToLocation(newFurniture) {
    this.furnitureMap[newFurniture.furnitureName] = newFurniture;
  }

  getFurnitureByName(furnitureName) { 
    for (var i=0; i < this.furnitureList.length; i++) {
      if (this.furnitureList[i].furnitureName === furnitureName) {
        return
      }
    }
  }

  listEntities() { //list all entities present in location
    console.log(this.characterMap);
    console.log(this.itemMap);
    console.log(this.furnitureMap);
  }
}
