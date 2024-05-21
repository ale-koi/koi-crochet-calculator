// arrays and objects
const standardMeasurementsCardigan = [
    {
        Size: "XXS",
        Back: 20,
        Arm: 20,
        Height: 35,
    },
]

const standardMeasurementsTop = [
    {
        Size: "XXS",
        Bust: 70, 
        Height: 35,
    },
]

const premadePatterns = [
    {
        id: 1,
        name: "Purse",
        yarn: "2ply",
        hook: "4 mm",
        swatch: "8 stitches by 3 rows",
        pattern: "insert here the pattern"
    },
    {
        id: 2,
        name: "Bucket Hat",
        yarn: "2ply",
        hook: "4 mm",
        swatch: "8 stitches by 3 rows",
        pattern: "insert here the pattern"
    },
    {
        id: 3,
        name: "Coaster",
        yarn: "2ply",
        hook: "4 mm",
        swatch: "8 stitches by 3 rows",
        pattern: "insert here the pattern"
    },
    {
        id: 4,
        name: "Market Bag",
        yarn: "2ply",
        hook: "4 mm",
        swatch: "8 stitches by 3 rows",
        pattern: "insert here the pattern"
    },
]

//!introducing the user

// let userName;
// do {
//     userName = prompt("What's your name?");
//     console.log("Hi, " + userName + "!")
//     } while (userName.length < 3 || userName.length > 10);

// //!asking for the tools. 
// let yarnWeight;
// let hookSize;
// do {
//     yarnWeight = prompt("What's your yarn weight? Any yarn weight is okay!");
//     hookSize = prompt("What hook are we using today? Any hook you consider appropriate for your yarn!\n For a looser stitch, use a bigger hook.");
//     if (yarnWeight !== "" && hookSize !== "") {
//         console.log("Your yarn is " + yarnWeight + " , and your hook is " + hookSize + ".");
//     }
// } while (yarnWeight == "" && hookSize == ""); 

//! asking for what are we doing today. 

let userUse;
let patternType;
let premadePick;
let userCardiganBack;
let userCardiganArm;
let userCardiganLength;
let userTopBust;
let userTopLength;

do{
    userUse = prompt("What are you using today? Type <Premade> for pre-made patterns, and <calculator> for personalized patterns.").toLowerCase()
    if (userUse ==  "premade"){
        console.log("These are the available options:")
        premadePatterns.forEach((premadePattern) => {
            console.log(premadePattern.id, premadePattern.name)
            });
            premadeChoice();
            break;
    }else if (userUse == "calculator"){
            personalizedChoice ()
            break;
    }
}while (userUse !== "premade" || userUse !== "calculator")


//!Asking if they have a swatch 
let swatch;
let swatchStitches;
let swatchRows;
if (userUse === "calculator"){
    swatch = prompt("Do you have a swatch?\nYes/No.").toLowerCase();
    if(swatch == "no" && pattern){
        alert("In order to continue, we need a swatch to do the calculations!")
        console.log(userName + ", please, do a 10 cm * 10 cm swatch with the needed stitch with your " + yarnWeight + " yarn, and your " + hookSize + " hook, so we can give you the pattern.");
    }else if(swatch == "yes"){
        swatchYes();
    }
}

//!giving them the pattern
if(userUse == "calculator" && patternType == "cardigan"){
    writtenPatternCardigan();
}else if(userUse == "calculator" && patternType == "top"){
    writtenPatternTop();
}

//!functions

function patternCardigan (){
    do {
        userCardiganLength = parseInt(prompt("Enter your desired length in centimeters.\nThis should be measured from your shoulder to wherever you want it to fall.\nFor a crop cardigan, measure from shoulder to waist.\nFor a regular size, measure shoulder to hips.\nThe smallest size available is 35 cm of length.\nFor a smaller size, check the children section."));
    }while (userCardiganLength < standardMeasurementsCardigan[0].Height || isNaN(userCardiganLength) || userCardiganLength  === "" || userCardiganLength  === null)
        console.log(userCardiganLength)

    do {
        userCardiganBack = parseInt(prompt("Enter your back measurement in centimeters.\nThis should be measured between your shoulders.\nThe smallest size available is 20 cm of length\nFor a smaller size, check the children section."));
    }while (userCardiganBack < standardMeasurementsCardigan[0].Back || isNaN(userCardiganBack) || userCardiganBack === "" || userCardiganBack === null)
        console.log(userCardiganBack)

    do {
        userCardiganArm = parseInt(prompt("Enter your arm length in centimeters.\nPut your hand on your waist, and measure from shoulder to wrist following the shape of your bent arm.\nFor a shorter sleeve, just measure to your desire.\nThe smallest size available is 20 cm in length.\nFor a smaller size, check the children section."));
    }while (userCardiganArm < standardMeasurementsCardigan[0].Arm || isNaN(userCardiganArm) || userCardiganArm === "" || userCardiganArm === null) 
        console.log(userCardiganArm)
}

function patternTop(){
        do{
            userTopBust = parseInt(prompt("Enter your bust circumference in centimeters. \nThis should be measured around the most prominent point of your chest. The smallest size available is 70 cm of chest circumference!\nFor a smaller size, check the kids section."))
            console.log(userTopBust)
        }while (userTopBust < standardMeasurementsTop[0].Bust || isNaN(userTopBust) || userTopBust === "" || userTopBust === null)
        do{
            userTopLength= parseInt(prompt("Enter your desired length in centimeters.\n This should be measured between your clavicle and wherever you desire your top to reach, could be navel or waist.\nThe smallest size available is 35 cm of length.\nFor a smaller size, check the kids section."))
            console.log(userTopLength)
        }while (userTopLength < standardMeasurementsTop[0].Height || isNaN(userTopLength) || userTopLength === "" || userTopLength === null) 
}

function writtenPatternCardigan(){
    if(patternType === "cardigan"){
        cardiganFirstRowBack = swatchStitches * userCardiganBack / 10;
        cardiganTotalRows = swatchRows * userCardiganLength / 10;
        cardiganSleeveStitches = (userCardiganBack / 2) * swatchStitches /10;
        cardiganSleeveRows = swatchRows * userCardiganArm / 10;
        cardiganFirstRowFrontPanel = (userCardiganBack / 2) * swatchStitches / 10; 
        console.log("For your back panel, start by chaining " + cardiganFirstRowBack + " + 2 for your turning chain.");
        console.log("You'll need " + parseInt(cardiganTotalRows) + " rows to complete your garment.")
        console.log("For your sleeves, start by chaining " + parseInt(cardiganSleeveStitches) + " + 2  for your turning chain; and " + cardiganSleeveRows + "to complete your sleeve. Remember, you'll need two of this.");
        console.log("For your front panel, start by chaining " + parseInt(cardiganFirstRowFrontPanel) + " + 2 for your turning chain, and a total of " + parseInt(cardiganTotalRows) + " rows to complete this piece. Remember, you'll need two!")
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements.");
    }
}

function writtenPatternTop(){
    if(patternType == "top"){
        topFirstRow = parseInt(swatchStitches * userTopBust /10);
        topTotalRows = parseInt(swatchRows * userTopLength / 10);
        console.log("For your top: Chain " + topFirstRow + " + 2 chains, including your turning chain. It goes bottom-top!");
        console.log("Your top would require " + topTotalRows + " rows!");
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements.");
    }
}

function swatchYes(){
    do{
        swatchStitches = parseInt(prompt("How many stitches does your swatch have?\nShould be more than 5 in order to be accurate."));
        swatchRows = parseInt(prompt("How many rows does your swatch have?\nShould be more than 5 in order to be accurate."));  
    }while (isNaN(swatchStitches) || isNaN(swatchRows) || swatchStitches < 5 || swatchRows < 5)
}

function premadeChoice(){
    do{
        premadePick = parseInt(prompt("select a number of the list according to the pattern you want"))
    }while (premadePick > premadePatterns.length || isNaN(premadePick) || premadePick === "" || premadePick === null || premadePick === 0)

    const pickedPremade = premadePatterns.find((pattern) => pattern.id === premadePick);
    console.log("You choose " + pickedPremade.name + " You'll need a " + pickedPremade.yarn + " and preferibly a " + pickedPremade.hook + "The swatch for this piece is " +  pickedPremade.swatch + " with the apointed stitch" + "\nPattern: " + pickedPremade.pattern)
}

function personalizedChoice (){
    patternType = prompt("What are we making today?\nCardigan or Top?").toLowerCase()
do {
    
        if (patternType == "cardigan"){
            console.log("You picked: Cardigan!");
            alert("Your swatch must be done in Half Double Crochet!\nRemember it must be 10 cm * 10cm.");
            alert("Next, input your measurements!");
            patternCardigan();
            break;
        }else if (patternType == "top"){
            console.log("You picked: Top!")
            alert("Your swatch must be done in Double Crochet!\nRemember it must be 10 cm * 10cm.")
            alert("Next, input your measurements!")
            patternTop();
            break;
        }else {
            alert("That's not an option! Try again!")
    }
}while (patternType !== "cardigan" || patternType !== "top")
}