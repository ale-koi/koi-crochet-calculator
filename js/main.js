// //!introducing the user

// let userName;
// do {
//     userName = prompt("What's your name?");
//     console.log("Hi, " + userName + "!")
//     } while (userName.length < 3 || userName.length > 10);

//!asking for the tools.
// let yarnWeight;
// let hookSize;
// do {
//     yarnWeight = prompt("What's your warn weight? \nLace \nFinger \n4ply \nChunky \nExtra chunky \nAny yarn weight is okay!");
//     hookSize = prompt("What hook are we using today? \n 3mm?  8.0? J? Any hook you consider appropiate for your yarn!");
//     if (yarnWeight !== "" && hookSize !== "") {
//         console.log("Your yarn is " + yarnWeight + " and your hook is " + hookSize + ".");
//     }
// } while (yarnWeight == "" && hookSize == "");

//!asking for what are we doing? + imputing meassurements
let patternType; 
let measurementCardiganBack;
let measurementCardiganArm;
let measurementCardiganLenght;
let measurementTopBust;
let measurementTopLength;
do {
    patternType = prompt("What are we making today? \nCardigan or Top?").toLowerCase()
        if (patternType == "cardigan"){
            alert("Your swatch must be done in Half Double Corchet!");
            alert("Next imput your measurements!");
            patternCardigan();
            break;
        }else if (patternType == "top"){
            console.log("You picked: Top!")
            alert("Your swatch must be done in Double Crochet!")
            alert("Next imput your measurements!")
            patternTop();
            break;
        }else {
            alert("That's not an option! Try again")
    }
}while (patternType !== "cardigan" || patternType !== "top")


//!Asking if they have a swatch 
let swatch = prompt("Do you have a swatch?").toLowerCase();
let swatchStitches;
let swatchRows;

switch (swatch){
    case "yes":
        swatchStitches = parseInt(prompt("How many stitches your swatch have?"));
        swatchRows = parseInt(prompt("How many rows your swatch have?"));
        break
    case "no":
        alert("Please... the swatch...")
        console.log(userName + ", please, do a 10 cm * 10 cm swatch with the needed stitch with your " + yarnWeight + " yarn and your " + hookSize + " hook, so we can give you the stitches");
        break
    default:
        alert("Something went wrong. ");
        console.log("Please, try again. switch (swatch)");
}



// //!giving them the pattern
// if(patternType == "cardigan"){
//     writtenPatternCardigan();
// }else if(patternType == "top"){
//     writtenPatternTop();
// }else{
//     prompt("Something went wrong. if(patternType == ")
// }

//!functions
function patternCardigan (){
    do{
        console.log("You picked: Cardigan!");
        measurementCardiganBack = parseInt(prompt("Enter your back measurement in centimeters.\nThis should be meassured between your shoulders. \n The smallest size avalible is 20 cm of lenghth \n For a smaller size, go to the kids section."));
        console.log("Your back measurement is " + measurementCardiganBack  + " cm.");
        measurementCardiganLenght = parseInt(prompt("Enter your desired length in centimeters.\nThis should be measured from your shoulder to wherever you want it to fall. \nFor a crop cardigan, measure from shoulder to waist.\nFor a regular size, measure shoulder to hips.\n The smallest size avalible is 35 cm of lenghth.\n For a smaller size, go to the kids section."));
        console.log("Your desired length is " + measurementCardiganLenght + " cm.");
        measurementCardiganArm = parseInt(prompt("Enter your arm lenghth in centimeters. \nPut your hand on your waist, and measure from shoulder to wrist following the shape of the bent arm. \nFor a shorter sleeve, just measure to your desire. \n The smallest size avalible is 20 cm of lenghth.\n For a smaller size, go to the kids section."));
        console.log("Your arm measurement is " + measurementCardiganArm  + " cm." );
    } while (measurementCardiganArm < 20 && measurementCardiganLenght < 35 && measurementCardiganBack < 30 || isNaN(measurementCardiganArm) || isNaN(measurementCardiganBack) || isNaN(measurementCardiganLenght))
}

function patternTop(){
    do{
        measurementTopBust = parseInt(prompt("Enter your bust circunference in centimeters. \nThis should be meassured around the most prominent point of your chest. The smallest size avalible is 70 cm of chest circunsference! \n For a smaller size, go to the kids section."))
        console.log("Your bust circunference is " + measurementTopBust + " cm")
        measurementTopLength = parseInt(prompt("Enter your desired length in centimeters.\n This should be measured between your clavicula and wherever you desired your top to reach, could be navel or waist.\n The smallest size avalible is 35 cm of lenghth \n For a smaller size, go to the kids section."))
        console.log("Your bust circunference is " + measurementTopLength + " cm")
        }while (measurementTopBust < 70 && measurementTopLength < 35 || isNaN(measurementTopBust) || isNaN(measurementTopLength))
}
// && 

function writtenPatternCardigan(){
    if(patternType === "cardigan"){
        cardiganFirstRowBack = swatchStitches * measurementCardiganBack / 10;
        cardiganTotalRows = swatchRows * measurementCardiganLenght / 10;
        cardiganSleeveStitches = (measurementCardiganBack / 2) * swatchStitches /10;
        cardiganSleeveRows = swatchRows * measurementCardiganArm / 10;
        cardiganFirstRowFrontPanel = (measurementCardiganBack / 2) * swatchStitches / 10; 
        console.log("For your back panel, you'll need: " + cardiganFirstRowBack + " + 2 stitches  for your turning chain as your foundation chain.");
        console.log("You'll need " + parseFloat(cardiganTotalRows) + " rows, to complete your garment")
        console.log("For your sleeves: Chain " + parseInt(cardiganSleeveStitches) + " chains as your foundation chain, and " + cardiganSleeveRows + "to complete your sleeve. Remember you'll need two of this.");
        console.log("For your front panel: Chain" + parseInt(cardiganFirstRowFrontPanel) + " chains, + 2 for your turning chain as foundation chain. And a total of " + parseInt(cardiganTotalRows) + " rows to complete this piece. Remember you'll need two!")
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements writtenPatternCardigan()");
    }
}

function writtenPatternTop(){
    if(patternType == "top"){
            topFirstRow = parseInt(swatchStitches * measurementTopBust /10);
            topTotalRows = parseInt(swatchRows * measurementTopLength /10);
            console.log("For your top: Chain " + topFirstRow + " + 2 chains, including your turning chain. It goes bottom-top!");
            console.log("Your top would require " + topTotalRows + " rows!");
    }else{
            alert("Something went wrong...");
            console.log("Please, check your measurements writtenPatternTop()");
}
}