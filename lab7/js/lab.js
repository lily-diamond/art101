// index.js - print user name backwards
// Author: Brielle LaPlante
// Date: 5/4/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName() {
    

    //assign input to a variable

    var userInput = window.prompt("Please type your name so we can sort it!");
    console.log("userInput assigned value: " + userInput);

    //split into array, sort, then rejoin and return variable

    return userInput.split('').sort().join('');
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
    //text printed on the site:

    document.writeln("We can fix your name!<br>Welcome ", sortUserName(), "!");
  

  }
  
  // let's get this party started
  main();