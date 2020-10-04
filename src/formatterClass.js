//deals with output to player usually thru changing the DOM and the output
"use strict";

class FormatOutput { //handles user input, outputs response
  constructor() {
    this.userInput = document.getElementById("user-input");
    this.displayText = document.getElementById("display-text");
    this.initialiseFrameInput = this.initialiseFrameInput.bind(this);
    this.outputResponseToFrame = this.outputResponseToFrame.bind(this);
    //this.childTextNodes;
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
        //childTextNodes = displayText.childNodes;
        /*fadeText(document.getElementById('demo-title'));
        clearChildNodes(displayText);*/


        //userInput.value = "";
        /*childTextNodes = displayText.childNodes;
        var childNodesNum = childTextNodes.length;

        if(childNodesNum > 13) {
          clearChildNodes(displayText);
        }

        game.gameCommands(userInput.value);
        userInput.value = ""; //clear the value after each input so user doesn't accidently submit same thing again
        */
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

  /*fadeText(element) { //animation to fade text slowly in main title
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
  }*/
}
