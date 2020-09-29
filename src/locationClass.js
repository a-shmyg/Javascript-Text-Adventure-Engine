//Location class holds items and characters, and provides valid paths to other locationStory
//class deals with construction and initialisation of objects held by location instance
"use strict";

class Location {
  constructor(locationName, locationNarration, characterList, itemList, furnitureList) {
    this.locationName = locationName;
    this.locationNarration = locationNarration;
    this.characterList = characterList[];
    this.itemList = itemList[];
    this.furnitureList = furnitureList[];
  }

  initLocation() {

  }

  listEntities() { //list all entities present in location

  }

  interactWithEntity(entityName) {
    //check entity exists
    //check events correspond with actions
  }
}
