// index.js - print transport
// Author: Brielle LaPlante
// Date: 4/28/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  let myMainRide = { 
    make: "Chevrolet",
    model:"Volt",
    color:"Gray",
    year: 2014,age: function() {
      return 2025-this.year;
    }
  };

  let myTransport = ["Chevy Volt", " Bus"];
  document.writeln("Getting Around: "+myTransport+"<br>");
  document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, "\t","</pre>"));



}

// let's get this party started
main();
