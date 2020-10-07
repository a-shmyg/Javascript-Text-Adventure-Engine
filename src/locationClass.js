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
    this.paths = [];
  }

  //ADDING METHODS
  addPathToLocation(pathName) {
    this.paths.push(pathName);
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

  //REMOVING METHODS
  removePathFromLocation(pathName) {
    this.paths.pop(pathName);
  }

  removeFurnitureFromLocation(furnitureName) {
    delete this.furnitureMap[furnitureName];
  }

  removeItemFromLocation(itemName) {
    delete this.itemMap[itemName];
  }

  removeCharacterFromLocation(characterName) {
    delete this.characterMap[characterMap];
  }

  //GETTERS
  getLocationFurniture() {
    return this.furnitureMap;
  }

  getPaths() {
    return this.paths;
  }

  pathExists(pathName) {
    if (this.paths.includes(pathName)) {
      return true;
    }
    return false;
  }

  getLocationItems() {
    return this.itemMap;
  }

  getLocationCharacters() {
    return this.characterMap;
  }

  getItemByName(itemName) {
    if (itemName in this.itemMap) {
      return this.itemMap[itemName];
    }
    return false;
  }

  getCharacterByName(characterName) {
    if (characterName in this.characterMap) {
      return this.characterMap[characterName];
    }
    return false;
  }

  getFurnitureByName(furnitureName) {
    if (furnitureName in this.furnitureMap) {
      return this.furnitureMap[furnitureName];
    }
    return false;
  }

  //FOR DEBUG
  listEntities() { //list all entities present in location
    console.log("listing entities");
    console.log(this.characterMap);
    console.log(this.itemMap);
    console.log(this.furnitureMap);
  }
}
