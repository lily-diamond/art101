/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Brielle LaPlante
   Date: 5/12/2025
*/

//add button to all sections
$(".special-section").append("<button class = 'special-button-button'>Make Special</button>");

//add the click listener
$(".special-button-button").click(function(){
    $(this).parent().toggleClass("special");
});




//
// work we did in section:
//
// var index = 0;

// let aColors = ["purple", "blue", "pink", "red"];

// function fDoColors(color)
// {
    
//     $("#output").css("background", color);
//     console.log(color);

//     let newColor = color + " " + aColors[index];
//     console.log(newColor);

//     index++;
// }

//fDoColors("purple");

//let doColors = fDoColors;
//aColors.map(fDoColors);

//setTimeout(fDoColors,2000);