//!introducing the user

let userName;
do {
    userName = prompt("What's your name?");
    console.log("Hi, " + userName + "!")
    } while (userName.length < 3 || userName.length > 10);

//!asking for the tools. 
let yarnWeight;
let hookSize;
do {
    yarnWeight = prompt("What's your yarn weight? Any yarn weight is okay!");
    hookSize = prompt("What hook are we using today? Any hook you consider appropriate for your yarn!\n For a looser stitch, use a bigger hook.");
    if (yarnWeight !== "" && hookSize !== "") {
        console.log("Your yarn is " + yarnWeight + " , and your hook is " + hookSize + ".");
    }
} while (yarnWeight == "" && hookSize == ""); 
// Yarn weight = cuan grueso es la lana que se usa. Se puede poner nombres como "chunky, lace, fingering, 4ply, etc". Hook es el ganchillo que se usa, puede ser "3.5 mm, J, 8, etc". 

//!asking for what are we doing? + imputing meassurements
let patternType; 
let measurementCardiganBack;
let measurementCardiganArm;
let measurementCardiganLenght;
let measurementTopBust;
let measurementTopLength;
do {
    patternType = prompt("What are we making today?\nCardigan or Top?").toLowerCase()
        if (patternType == "cardigan"){
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


//!Asking if they have a swatch 
let swatch = prompt("Do you have a swatch?\nYes/No.").toLowerCase();
let swatchStitches;
let swatchRows;

if(swatch == "no"){
    alert("Please... the swatch...")
    console.log(userName + ", please, do a 10 cm * 10 cm swatch with the needed stitch with your " + yarnWeight + " yarn, and your " + hookSize + " hook, so we can give you the pattern.");
}else if(swatch == "yes"){
    swatchYes();
}
// swatch es una pequeña muestra que se hace antes de comenzar a tejer la pieza. Usualmente mide 10*10, puede tener cualquier cantidad de stitches y rows dependiendo de la lana que se use. 

//!giving them the pattern
if(patternType == "cardigan"){
    writtenPatternCardigan();
}else if(patternType == "top"){
    writtenPatternTop();
}else{
    prompt("Something went wrong.")
}

//!functions

function patternCardigan (){
    do{
        console.log("You picked: Cardigan!");
        measurementCardiganBack = parseInt(prompt("Enter your back measurement in centimeters.\nThis should be measured between your shoulders.\nThe smallest size available is 20 cm of length\nFor a smaller size, check the children section."));
        console.log("Your back measurement is " + measurementCardiganBack  + " cm.");
        measurementCardiganLenght = parseInt(prompt("Enter your desired length in centimeters.\nThis should be measured from your shoulder to wherever you want it to fall.\nFor a crop cardigan, measure from shoulder to waist.\nFor a regular size, measure shoulder to hips.\nThe smallest size available is 35 cm of length.\nFor a smaller size, check the children section."));
        console.log("Your desired length is " + measurementCardiganLenght + " cm.");
        measurementCardiganArm = parseInt(prompt("Enter your arm length in centimeters.\nPut your hand on your waist, and measure from shoulder to wrist following the shape of your bent arm.\nFor a shorter sleeve, just measure to your desire.\nThe smallest size available is 20 cm in length.\nFor a smaller size, check the children section."));
        console.log("Your arm measurement is " + measurementCardiganArm  + " cm." );
    } while (measurementCardiganArm < 20 && measurementCardiganLenght < 35 && measurementCardiganBack < 30 || isNaN(measurementCardiganArm) || isNaN(measurementCardiganBack) || isNaN(measurementCardiganLenght))
}

function swatchYes(){
    do{
        swatchStitches = parseInt(prompt("How many stitches does your swatch have?\nShould be more than 5 in order to be accurate."));
        swatchRows = parseInt(prompt("How many rows does your swatch have?\nShould be more than 5 in order to be accurate."));  
    }while (isNaN(swatchStitches) || isNaN(swatchRows) || swatchStitches < 5 || swatchRows < 5)
}

function patternTop(){
    do{
        measurementTopBust = parseInt(prompt("Enter your bust circumference in centimeters. \nThis should be measured around the most prominent point of your chest. The smallest size available is 70 cm of chest circumference!\nFor a smaller size, check the kids section."))
        console.log("Your bust circumference is " + measurementTopBust + " cm")
        measurementTopLength = parseInt(prompt("Enter your desired length in centimeters.\n This should be measured between your clavicle and wherever you desire your top to reach, could be navel or waist.\nThe smallest size available is 35 cm of length.\nFor a smaller size, check the kids section."))
        console.log("Your desired length is " + measurementTopLength + " cm")
    }while (measurementTopBust < 70 && measurementTopLength < 35 || isNaN(measurementTopBust) || isNaN(measurementTopLength))
}

function writtenPatternCardigan(){
    if(patternType === "cardigan"){
        cardiganFirstRowBack = swatchStitches * measurementCardiganBack / 10;
        cardiganTotalRows = swatchRows * measurementCardiganLenght / 10;
        cardiganSleeveStitches = (measurementCardiganBack / 2) * swatchStitches /10;
        cardiganSleeveRows = swatchRows * measurementCardiganArm / 10;
        cardiganFirstRowFrontPanel = (measurementCardiganBack / 2) * swatchStitches / 10; 
        console.log("For your back panel, start by chaining " + cardiganFirstRowBack + " + 2 for your turning chain.");
        console.log("You'll need " + parseFloat(cardiganTotalRows) + " rows to complete your garment.")
        console.log("For your sleeves, start by chaining " + parseInt(cardiganSleeveStitches) + " + 2  for your turning chain; and " + cardiganSleeveRows + "to complete your sleeve. Remember, you'll need two of this.");
        console.log("For your front panel, start by chaining " + parseInt(cardiganFirstRowFrontPanel) + " + 2 for your turning chain, and a total of " + parseInt(cardiganTotalRows) + " rows to complete this piece. Remember, you'll need two!")
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements.");
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
        console.log("Please, check your measurements.");
    }
}