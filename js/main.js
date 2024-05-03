let userName;

do {
    userName = prompt("What's your name?");
    console.log("Hi, " + userName + "!")
    } while (userName.length < 3 || userName.length > 10);


let yarnWeight;
let hookSize;

do {
    yarnWeight = prompt("What's your warn weight? \nLace \nFinger \n4ply \nChunky \nExtra chunky \nAny yarn weight is okay!");
    hookSize = prompt("What hook are we using today? \n 3mm?  8.0? J? Any hook you consider appropiate for your yarn!");
    if (yarnWeight !== "" && hookSize !== "") {
        console.log("Your yarn is " + yarnWeight + " and your hook is " + hookSize + ".");
    }
} while (yarnWeight == "" && hookSize == "");


let patternType; 
let measurementCardiganBack;
let measurementCardiganArm;
let measurementCardiganLenght;
let measurementTopBust;
let measurementTopLength;

do {
    patternType = prompt("What are we making today? \nCardigan or Top?").toLowerCase()
        if (patternType == "cardigan"){
            console.log("You picked: Cardigan!")
            alert("Your swatch must be done in Half Double Corchet!")
            alert("Next imput your measurements!")
            measurementCardiganBack = parseInt(prompt("Enter your back measurement in centimeters.\nThis should be meassured between your shoulders."))
            console.log("Your back measurement is " + measurementCardiganBack  + " cm.")
            measurementCardiganLenght = parseInt(prompt("Enter your desired length. \nThis should be measured from your shoulder to wherever you want it to fall. \nFor a crop cardigan, measure from shoulder to waist. \nFor a regular size, measure shoulder to hips. Any length is okay!"))
            console.log("Your desired length is " + measurementCardiganLenght  + " cm.")
            measurementCardiganArm = parseInt(prompt("Enter your arm lenghth. \nPut your hand on your waist, and measure from shoulder to wrist following the shape of the bent arm. \nFor a shorter sleeve, just measure to your desire."))
            console.log("Your arm measurement is " + measurementCardiganArm  + " cm." )
            break
        }else if (patternType == "top"){
            console.log("You picked: Top!")
            alert("Your swatch must be done in Double Crochet!")
            alert("Next imput your measurements!")
            measurementTopBust = parseInt(prompt("Enter your bust circunference in centimeters. \nThis should be meassured around the most prominent point of your chest"))
            console.log("Your bust circunference is " + measurementTopBust + " cm")
            measurementTopLength = parseInt(prompt("Enter your desired length.\n This should be measured between your clavicula and wherever you desire your top to reach, could be navel or waist."))
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
            console.log(userName + ", please, do a 10 cm * 10 cm swatch with the needed stitch with your " + yarnWeight + " yarn and your " + hookSize + " hook, so we can give you the stitches")
            break
    }else if (swatch = "yes"){
    swatchStitches = parseInt(prompt("How many stitches your swatch have?"));
    swatchRows = parseInt(prompt("How many rows your swatch have?"));
        {if (swatchStitches !== "" && swatchRows !== ""){
            console.log("Your swatch is " + swatchStitches + " stitches by " + swatchRows + " rows.")
            writtenPattern();
        }
    }
} 
}while (swatchStitches == "" && swatchRows == "" && swatch == "yes");


function writtenPattern(){
    if (patternType == "cardigan"){
        cardiganFirstRowBack = swatchStitches * measurementCardiganBack / 10;
        cardiganTotalRows = swatchRows * measurementCardiganLenght / 10;
        cardiganSleeveStitches = (measurementCardiganBack / 2) * swatchStitches /10;
        cardiganSleeveRows = swatchRows * measurementCardiganArm / 10;
        cardiganFirstRowFrontPanel = (measurementCardiganBack / 2) * swatchStitches / 10; 
        console.log("For your back panel, you'll need: " + cardiganFirstRowBack + " + 2 stitches  for your turning chain as your foundation chain.")
        console.log("You'll need " + cardiganTotalRows + " rows, to complete your garment")
        console.log("For your sleeves: Chain " + cardiganSleeveStitches +  " chains as your foundation chain, and " + cardiganSleeveRows + "to complete your sleeve. Remember you'll need two of this.")
        console.log("For your front panel: Chain" + cardiganFirstRowFrontPanel + " chains, + 2 for your turning chain as foundation chain. And a total of " + cardiganTotalRows + " rows to complete this piece. Remember you'll need two!")
    } else if (patternType == "top") {
        topFirstRow = swatchStitches * measurementTopBust /10;
        topTotalRows = swatchRows * measurementTopLength /10;
        console.log("For your top: Chain " + topFirstRow + "  + 2 chains, including your turning chain. It goes bottom-top!");
        console.log("Your top would require " + topTotalRows + " rows!")
    } else{
        alert("Something went wrong...")
    }
}
