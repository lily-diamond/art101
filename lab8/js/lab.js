
// Name: Brielle LaPlante
//
// Date: May 8th 2025
//
// Lab 8





//function to square the number input
function square(num)
{
    //square num by multiplying it by itself
    console.log("Squaring "+num+"...");
    return num*num;
}

//create an array we can map to
let arr = [1, 2, 3, 4, 5];

//store results of mapping the array
var mapResults = arr.map(square);

//print the results, each seperated by a space so that it looks readable
$("#output").append(mapResults.join(" "));

console.log("Done!");