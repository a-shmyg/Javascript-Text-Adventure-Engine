//deals with items that are interactable and which are not
"use strict";

class Item {
  constructor(itemName, itemEffect, itemValue) { //can be picked up
    this.itemName = itemName;
    this.itemEffect = itemEffect;
    this.itemValue = itemValue;
  }
}

class Armour extends Item { //affects armour
  constructor(itemName, itemEffect, itemValue) {
    super(itemName, itemEffect);
  }
}

class Weapon extends Item { //affects damage
  constructor(itemName, itemEffect, itemValue) {
    super(itemName, itemEffect);
  }
}

class Consumable extends Item { //affects any stat ie health potion poison etc
  constructor(itemName, itemEffect, effectStatTarget, itemValue) {
    super(itemName, itemEffect);
    this.effectStatTarget = effectStatTarget;
  }
}

class Furniture { //interactable with, cant be picked up
  constuctor(furnitureName) {
    this.furnitureName = furnitureName;
  }
}
