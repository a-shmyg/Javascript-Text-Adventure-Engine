//deals with output to player usually thru changing the DOM and the output
"use strict";

class FormatOutput { //handles user input, outputs response
  constructor() {
    this.userInput = document.getElementById("user-input");
    this.firstInput = false;
    this.displayText = document.getElementById("display-text");
    this.childTextNodes;
  }

  initialiseFrameInput() {
    document.addEventListener("keypress", inputHandler, false);
    console.log("initialised frame formatter");
  }

  inputHandler(keyInput) {
    console.log("handling input keypress");

    if (keyInput.key == 'Enter') { //bounce to initialise
      //var userInput = document.getElementById("user-input");

      if (this.firstInput == false) {
        childTextNodes = displayText.childNodes;
        fadeText(document.getElementById('demo-title'));
        clearChildNodes(displayText);

        game.spawnLocations();
        game.introductionText();

        firstInput = true;
        userInput.value = "";

      } else {

        childTextNodes = displayText.childNodes;
        var childNodesNum = childTextNodes.length;

        if(childNodesNum > 13) {
          clearChildNodes(displayText);
        }

        game.gameCommands(userInput.value);
        userInput.value = ""; //clear the value after each input so user doesn't accidently submit same thing again

      }
    }
  }

  fadeText(element) { //animation to fade text slowly in main title
    var element;
    var transparency = 1;
    var id = setInterval(frame, 100);

    console.log(element);

    function frame() {
      if (transparency == 0) {
        clearInterval(id);
      } else {
        transparency -= 0.1;
        element.style.opacity = transparency;
      }
    }
  }

  function clearChildNodes(element) {
    var child = element.lastElementChild;

    while (child) {

      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

  processInputToFrame(input) {

  }

  outputResponseToFrame(output) { //allow option for newline

  }
}
