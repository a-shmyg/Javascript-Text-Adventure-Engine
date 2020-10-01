//Location class holds items and characters, and provides valid paths to other locationStory
//class deals with construction and initialisation of objects held by location instance
"use strict";

class Location {
  constructor(locationName, locationNarration, characterList, itemList, furnitureList) {
    this.locationName = locationName;
    this.locationNarration = locationNarration;
    this.characterList = characterList;
    this.itemList = itemList;
    this.furnitureList = furnitureList;
  }

  addCharacterToLocation(newCharacter) {
    this.characterList.push(newCharacter);
  }

  addItemToLocation(newItem) {
    this.itemList.push(newItem);
  }

  addFurnitureToLocation(newFurniture) {
    this.furnitureList.push(newFurniture);
  }

  initLocation() {

  }

  listEntities() { //list all entities present in location
    console.log(this.characterList);
    console.log(this.itemList);
    console.log(this.furnitureList);
  }
}
