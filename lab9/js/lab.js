var index = 0;

let aColors = ["purple", "blue", "pink", "red"];

function fDoColors(color)
{
    
    $("#output").css("background", color);
    console.log(color);

    let newColor = color + " " + aColors[index];
    console.log(newColor);

    index++;
}

//fDoColors("purple");

//let doColors = fDoColors;
aColors.map(fDoColors);

//setTimeout(fDoColors,2000);