//contains player and NPC class definitions
"use strict";

class Character { //name, inv, stats
  constructor(characterName, characterStats) {
    this.characterName = characterName;
    this.characterStats = characterStats;
    this.characterInv = {};
  }

  outputCharInfo() { //to test it works correctly
    console.log(this.characterName);
    console.log(this.characterStats);
    console.log(this.characterInv);
  }

  addToInventory(item) {
    this.characterInv[item.itemName] = item;
  }

  removeFromInventory(itemName) {
    delete this.characterInv[itemName];
  }

  listInventory() {
    console.log(this.characterInv);
  }

  getCharacterInventory() {
    return this.characterInv;
  }
}

class NPC extends Character { //extra option if hostile or not
  constructor(characterName, characterStats, characterInv, isHostile) {
    super(characterName, characterStats, characterInv);
    this.isHostile = isHostile;
  }

  outputCharInfo() { //to test it works correctly
    super.outputCharInfo();
    console.log(this.isHostile);
  }

}

class Player extends Character { //extra option for current location
  constructor(characterName, characterStats, characterInv, currentLocation) {
    super(characterName, characterStats, characterInv);
    this.currentLocation = currentLocation;
  }

  outputCharInfo() { //to test it works correctly
    super.outputCharInfo();
    console.log(this.currentLocation);
  }

}
