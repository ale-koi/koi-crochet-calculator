let userName;

do {
    userName = prompt("What's your name?");
    console.log("Hi, " + userName + "!")
    } while (userName.length < 3 || userName.length > 10);


let yarnWeight;
let hookSize;

do {
    yarnWeight = prompt("What's your warn weight?");
    hookSize = prompt("What's your hook size? in milimeters");
    if (yarnWeight !== "" && hookSize !== "") {
        console.log("Your yarn is " + yarnWeight + " and your hook size is " + hookSize + ".");
    }
} while (yarnWeight == "" && hookSize == "");


let patternType; 
let measurementCardiganBack;
let measurementCardiganArm;
let measurementCardiganLenght;
let measurementTopBust;
let measurementTopLength;

do {
    patternType = prompt("What are we making today? Cardigan or Top?").toLowerCase()
        if (patternType == "cardigan"){
            console.log("You picked: Cardigan!")
            alert("Your swatch must be done in Half Double Corchet!")
            alert("Next imput your measurements!")
            measurementCardiganBack = parseInt(prompt("Enter your back measurement in centimeters. This should be meassured between your shoulders."))
            console.log("Your back measurement is " + measurementCardiganBack  + " cm.")
            measurementCardiganLenght = parseInt(prompt("Enter your desired length. This should be measured from your shoulder to wherever you want it to fall. For a crop cardigan, measure from shoulder to waist. For a regular size, measure shoulder to hips. Any length is okay!"))
            console.log("Your desired length is " + measurementCardiganLenght  + " cm.")
            measurementCardiganArm = parseInt(prompt("Enter your arm lenghth. Put your hand on your waist, and measure from shoulder to wrist following the shape of the bent arm. For a shorter sleeve, just measure to your desire."))
            console.log("Your arm measurement is " + measurementCardiganArm  + " cm." )
            break
        }else if (patternType == "top"){
            console.log("You picked: Top!")
            alert("Your swatch must be done in Double Crochet!")
            alert("Next imput your measurements!")
            measurementTopBust = parseInt(prompt("Enter your bust circunference in centimeters. This should be meassured around the most prominent point of your chest"))
            console.log("Your bust circunference is " + measurementTopBust + " cm")
            measurementTopLength = parseInt(prompt("Enter your desired length. This should be measured between your clavicula and wherever you desire your top to reach, could be navel or waist."))
            console.log("Your desire length is " + measurementTopLength + " cm")
            break 
        }else {
                alert("That's not an option! Try again")
    }
}while (patternType !== "cardigan" || patternType !== "top")


let swatch = prompt("Do you have a swatch?").toLowerCase();
let swatchStitches;
let swatchRows;
do {
    if (swatch == "no"){
            alert("Please... the swatch...")
            console.log("Do a 10 cm * 10 cm swatch with your " + yarnWeight + " yarn and your " + hookSize + " , so we can give you the stitches")
            break
    }else if (swatch = "yes"){
    swatchStitches = parseInt(prompt("How many stitches your swatch have?"));
    swatchRows = parseInt(prompt("How many rows your swatch have?"));
        {if (swatchStitches !== "" && swatchRows !== ""){
            console.log("Your swatch is " + swatchStitches + " stitches by " + swatchRows + " rows.")
        }
    }
} 
}while (swatchStitches == "" && swatchRows == "" && swatch == "yes");


let cardiganFirstRowBack = swatchStitches * measurementCardiganBack / 10;
let cardiganTotalRows = swatchRows * measurementCardiganLenght / 10;
let cardiganSleeveStitches = (measurementCardiganBack / 2) * swatchStitches /10;
let cardiganSleeveRows = swatchRows * measurementCardiganArm / 10;
let cardiganFirstRowFrontPanel = (measurementCardiganBack / 2) * swatchStitches / 10; 

if (patternType == "cardigan" && swatch == "yes"){
    console.log("For your back panel, you'll need: " + cardiganFirstRowBack + " + 2 stitches  for your turning chain as your foundation chain.")
    console.log("You'll need " + cardiganTotalRows + " rows, to complete your garment")
    console.log("For your sleeves: Chain " + cardiganSleeveStitches +  " chains as your foundation chain, and " + cardiganSleeveRows + "to complete your sleeve. Remember you'll need two of this.")
    console.log("For your front panel: Chain" + cardiganFirstRowFrontPanel + " chains, + 2 for your turning chain as foundation chain. And a total of " + cardiganTotalRows + " rows to complete this piece. Remember you'll need two!")
}

// if (patternType == "top" && watch == "yes"){
// here we add the thingies for the top
// }