//contains player and NPC class definitions
"use strict";

class Player {
  constructor(playerName, playerInventory, playerStats, currentLocation) {
    this.playerName = playerName;
    this.playerStats = playerStats;
    this.playerInventory = playerInventory;
    this.currentLocation = currentLocation;
  }

  outputPlayerInfo() { //to test it works correctly
    console.log(this.playerName);
    console.log(this.playerInventory);
    console.log(this.playerStats);
    console.log(this.currentLocation);
  }

}
