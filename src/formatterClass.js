//deals with output to player usually thru changing the DOM and the output
"use strict";

class FormatOutput { //handles user input, outputs response
  constructor() {
    this.userInput = document.getElementById("user-input");
    this.displayText = document.getElementById("display-text");

    this.initialiseFrameInput = this.initialiseFrameInput.bind(this);
    this.outputResponseToFrame = this.outputResponseToFrame.bind(this);
    this.clearChildNodes = this.clearChildNodes.bind(this);
    this.inputHandler = this.inputHandler.bind(this); // i hate javascript
  }

  initialiseFrameInput() {
    document.addEventListener("keypress", this.inputHandler, false);
    console.log("initialised frame formatter");
  }

  inputHandler(keyInput) {
    if (keyInput.key == 'Enter') { //bounce to initialise
      console.log("input done");
      console.log(this.userInput.value);

      if(this.displayText.childNodes.length > 13) {
          console.log("clearing");
          this.clearChildNodes(this.displayText);
      }

      this.outputResponseToFrame(this.userInput.value);
      this.userInput.value="";
      }
    }

    outputResponseToFrame(output) { //allow option for newline
      console.log(output);
      var newOutputText = document.createElement('p'); //new p node
      newOutputText.classList.add("welcome-text"); //styling
      newOutputText.classList.add("console");

      var textnode = document.createTextNode(output);
      newOutputText.appendChild(textnode);
      this.displayText.appendChild(newOutputText);
    }

  clearChildNodes(element) {
    console.log("clearing nodes");
    var child = element.lastElementChild;

    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
}
