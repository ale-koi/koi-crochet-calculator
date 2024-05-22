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
        name: "Strawberry Plushie",
        yarn: "Any yarn you want",
        hook: "Any hook according to the yarn. For amirugumi, going a size down helps tension.",
        swatch: "Not needed",
        pattern: `For the Fruit:
        Magic circle
        Row 1: 6sc
        Row 2: 6sc inc (12 sts)
        Row 3-4: 12 sc (12 sts)
        Row 5: (1 sc, sc inc)x6 (18 sts)
        Row 6-7: 18 sc (18 sts)
        Row 8: (1 sc, sc dec)x6 (12 sts)
        Row 9: 12 sc (12 sts)
        Add stuffing
        Row 10: (1 sc, sc dec)x6 (6 sts)
        Sew top shut
        For the Stem:
        Magic circle
        Row 1: 5sc
        Row 2: (ch3, 1sc 2nd chain from the hoor. 1 hdc on last chain, ss on the next stitch)x6
        Sew to top of fruit.`
    },
    {
        id: 2,
        name: "Flower Coaster",
        yarn: "Medium Weight Yarn (4)",
        hook: "a 4.00 mm hook",
        swatch: "9 stitches wide by 10 rows tall (10 cm *10 cm ) in single crochet.",
        pattern: `Foundation: Create a magic ring
        Round 1: Sc 6 into magic ring. <6>
        Round 2: Work 2 sc in each st all the way around. <12>
        Round 3: *Sc, 2 sc in same st, *repeat all the way around <18>
        Round 4: *2 sc in same st, sc 2, *repeat all the way around. <24>
        Round 5: *Sc 3, 2 sc in same st, *repeat all the way around, sl st into the first st of the round. <30>
        Round 6: Ch 1 with color of your choice, hdc in each st all the way around, sl st into first st of round. <30>
        Round 7: Ch 1, sl st into that same st, *sc, hdc, 5 dc in same st, hdc, sc, sl st, *repeat until the end of the round, sl st into first st of round. <50>
        Round 8: Ch 1, sl st into that same st, *sc, hdc 3, 3 hdc in same st, hdc 3, sc, sl st, *repeat until the end of the round, sl st into first st of round. <60> 
        Round 9: Ch 1, sl into that same st, *sc 2, hdc, 2 hdc in same st, hdc, 2 hdc in same st, hdc, 2 hdc in same st, hdc, sc 2, sl st, *repeat until the end of the round, sl st into first st of the round. <75>
        Fasten off.`
    },
    {
        id: 3,
        name: "Bucket hat",
        yarn: "Medium Weight Yarn (4)",
        hook: "a 5.0 mm hook",
        swatch: "15 stitches wide by 8.5 rows tall (10 cm * 10 cm) in double crochet. ",
        pattern: `Round 1: Make a magic ring, ch2, dc10 into the magic ring, sl st (10)
        Round 2: ch2, inc in each st around, sl st (20)
        Round 3: ch2, rep [dc in the first st, inc in the next] around, sl st (30)
        Round 4: ch 2, rep [dc in the first 2 st, inc in the next] around, sl st (40)
        Round 5: ch 2, rep [dc in the first 3 st, inc in the next] around, sl st (50)
        Round 6: ch 2, rep [dc in the first 4 st, inc in the next] around, sl st (60)
        Round 7: ch 2, rep [dc in the first 5 st, inc in the next] around, sl st (70)
        - Stop here and move onto the middle for a small sized hat (if your gauge matches)-
        Round 8: ch2, repeat [dc in the first 6 st, inc in the next] around, sl st (80)
        -Stop here and move onto the middle for a medium sized hat (if your gauge matches)-
        Round 9: ch2, repeat [dc in the first 7 st, inc in the next] around, sl st (90)
        
        Middle
        Round 1: ch2, dc in the blo of each st around, sl st (70, 80, 90)
        Round 2-7: ch2, dc in each st around, sl st (70, 80, 90)
        
        Brim
        Round 1: ch2, rep [dc in the flo of the first (6, 7, 8) st, inc in the flo of the next] around, sl st (80, 90, 100)
        Round 2: ch2, dc in each st around, sl st
        Round 3: ch 2, rep [dc in the first (7, 8, 9) st, inc in the next] around, sl st (90, 100, 110)
        Round 4: ch 2, dc in each st around, sl st
        Round 5: ch 2, rep [dc in the first (8, 9, 10) st, inc in the next] around, sl st (100, 110, 120)`
    },
    // { // to be implemented later
    //     id: 4,
    //     name: "Market Bag",
    //     yarn: "2ply",
    //     hook: "4 mm",
    //     swatch: "8 stitches by 3 rows",
    //     pattern: "insert here the pattern"
    // },
]

//!introducing the user
let userName;
do {
    userName = prompt("What's your name?");
    console.log(`Hi, ${userName}!`)
    } while (userName.length < 3 || userName.length > 10);


//! asking for what are we doing today. 
let userUse;
let patternType;
let premadePick;
let yarnWeight;
let hookSize;
let userCardiganBack;
let userCardiganArm;
let userCardiganLength;
let userTopBust;
let userTopLength;

do{
    userUse = prompt(
    `What are you using today? 
    Type:
    <Premade> for pre-made patterns
    <Calculator> for personalized patterns.`).toLowerCase()
    if (userUse ==  "premade"){
        console.log(`These are the available options:`)
        premadePatterns.forEach((premadePattern) => {
            console.log(premadePattern.id, premadePattern.name)
            });
            premadeChoice();
            break;
    }else if (userUse == "calculator"){
        do {
            yarnWeight = prompt(
            `What's your yarn weight? Any yarn weight is okay!
        Some options are: 4ply, Chunky, Fingering, Chelline.`);
            hookSize = prompt(
            `What hook are we using today? 
        Any hook you consider appropriate for your yarn!
        For a looser stitch, use a bigger hook.
        Some options are: 3mm, J, 8.0.`);
            if (yarnWeight !== "" && hookSize !== "") {
                console.log(`Your yarn is ${yarnWeight}, and your hook is ${hookSize}.`);
            }
        } while (yarnWeight == "" && hookSize == ""); 
            personalizedChoice ()
            break;
    }
}while (userUse !== "premade" || userUse !== "calculator")

//!Asking if they have a swatch 
let swatch;
let swatchStitches;
let swatchRows;


if (userUse === "calculator"){
    swatch = prompt(`Do you have a swatch?
    For the calculator to give you the pattern, it needs some information about your yarn with a swatch. 
    Type:
    <Yes> if you have it;
    <No> For further instructions.`).toLowerCase();
    if(swatch == "yes"){
        swatchYes();
    }else if(swatch == "no"){
        alert(`In order to continue, we need a swatch to do the calculations!`)
        console.log(`${userName}, please, do a 10 cm * 10 cm swatch with the requiered stitch with your ${yarnWeight} yarn, and your ${hookSize} hook, so we can give you the pattern.`);
    }else{
        console.log("Something went wrong")
    }       
}


//!giving them the pattern
if(userUse == "calculator" && patternType == "cardigan" && swatch == "yes"){
    writtenPatternCardigan();
}else if(userUse == "calculator" && patternType == "top" && swatch == "yes"){
    writtenPatternTop();
}

//!functions
function personalizedChoice (){
    patternType = prompt(`What are we making today?
    Cardigan or Top?`).toLowerCase()
    do {
        if (patternType == "cardigan"){
            console.log("You picked: Cardigan!");
            alert(`Your swatch must be done in Half Double Crochet!
            Remember it must be 10 cm * 10cm.`);
            alert("Next, input your measurements!");
            patternCardigan();
            break;
        }else if (patternType == "top"){
            console.log("You picked: Top!")
            alert(`Your swatch must be done in Double Crochet!
            Remember it must be 10 cm * 10cm.`)
            alert("Next, input your measurements!")
            patternTop();
            break;
        }else {
            alert("That's not an option! Try again!")
        }
    }while (patternType !== "cardigan" || patternType !== "top")
}


function patternCardigan (){
    do {
        userCardiganLength = parseInt(prompt(`Enter your desired length in centimeters.
        This should be measured from your shoulder to wherever you want it to fall.
        For a cropped cardigan, measure from shoulder to waist.
        For a regular size, measure shoulder to hips.
        The smallest size available is 35 cm of length.
        For a smaller size, check the children section.`));
    }while (userCardiganLength < standardMeasurementsCardigan[0].Height || isNaN(userCardiganLength) || userCardiganLength  === "" || userCardiganLength  === null)
        console.log(`Your desired length is ${userCardiganLength}.`)

    do {
        userCardiganBack = parseInt(prompt(`Enter your back measurement in centimeters.
        This should be measured between your shoulders.
        The smallest size available is 20 cm of length.
        For a smaller size, check the children section.`));
    }while (userCardiganBack < standardMeasurementsCardigan[0].Back || isNaN(userCardiganBack) || userCardiganBack === "" || userCardiganBack === null)
        console.log(`Your back measurement is ${userCardiganBack}.`)

    do {
        userCardiganArm = parseInt(prompt(`Enter your arm length in centimeters.
        Put your hand on your waist, and measure from shoulder to wrist following the shape of your bent arm.
        For a shorter sleeve, just measure to your desire.
        The smallest size available is 20 cm in length.
        For a smaller size, check the children section.`));
    }while (userCardiganArm < standardMeasurementsCardigan[0].Arm || isNaN(userCardiganArm) || userCardiganArm === "" || userCardiganArm === null) 
        console.log(`Your desired arm length is ${userCardiganArm}.`)
}


function patternTop(){
    do{
        userTopBust = parseInt(prompt(`Enter your bust circumference in centimeters.
        This should be measured around the most prominent point of your chest. 
        The smallest size available is 70 cm of chest circumference!
        For a smaller size, check the kids section.`))
        console.log(`Your bust circunference is ${userTopBust}`)
    }while (userTopBust < standardMeasurementsTop[0].Bust || isNaN(userTopBust) || userTopBust === "" || userTopBust === null)
    do{
        userTopLength= parseInt(prompt(`Enter your desired length in centimeters.
        This should be measured between your clavicle and wherever you desire your top to reach; could be navel or waist.
        The smallest size available is 35 cm of length.
        For a smaller size, check the kids section.`))
        console.log(`Your desired length is ${userTopLength}`)
    }while (userTopLength < standardMeasurementsTop[0].Height || isNaN(userTopLength) || userTopLength === "" || userTopLength === null) 
}


function writtenPatternCardigan(){
    if(patternType === "cardigan"){
        cardiganFirstRowBack = swatchStitches * userCardiganBack / 10;
        cardiganTotalRows = swatchRows * userCardiganLength / 10;
        cardiganSleeveStitches = (userCardiganBack / 2) * swatchStitches /10;
        cardiganSleeveRows = swatchRows * userCardiganArm / 10;
        cardiganFirstRowFrontPanel = (userCardiganBack / 2) * swatchStitches / 10; 
        console.log(`For your back panel, start by chaining ${cardiganFirstRowBack} + 2 for your turning chain.`);
        console.log(`You'll need ${Math.ceil(cardiganTotalRows)} rows to complete your garment.`)
        console.log(`For your sleeves, start by chaining ${Math.ceil(cardiganSleeveStitches)} + 2  for your turning chain; and ${cardiganSleeveRows} to complete your sleeve. Remember, you'll need two of this.`);
        console.log(`For your front panel, start by chaining ${Math.ceil(cardiganFirstRowFrontPanel)} + 2 for your turning chain, and a total of ${Math.ceil(cardiganTotalRows)} rows to complete this piece. Remember, you'll need two!`)
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements.");
    }
}


function writtenPatternTop(){
    if(patternType == "top"){
        topFirstRow = parseInt(swatchStitches * userTopBust / 10);
        topTotalRows = parseInt(swatchRows * userTopLength / 10);
        console.log(`For your top: Chain ${topFirstRow} + 2 chains, including your turning chain. It goes bottom-up!`);
        console.log(`Your top would require ${topTotalRows} rows!`);
    }else{
        alert("Something went wrong...");
        console.log("Please, check your measurements.");
    }
}


function swatchYes(){
    do{
        swatchStitches = parseInt(prompt(`How many stitches does your swatch have?
        Should be more than 5 in order to be accurate.`));
        swatchRows = parseInt(prompt(`How many rows does your swatch have?
        Should be more than 5 in order to be accurate.`));  
    }while (isNaN(swatchStitches) || isNaN(swatchRows) || swatchStitches < 5 || swatchRows < 5)
}


function premadeChoice(){
    do{
        premadePick = parseInt(prompt("Select a number of the list according to the pattern you want"))
    }while (premadePick > premadePatterns.length || isNaN(premadePick) || premadePick === "" || premadePick === null || premadePick === 0)

    const pickedPremade = premadePatterns.find((pattern) => pattern.id === premadePick);
        console.log(`You picked: ${pickedPremade.name}.
        You'll need ${pickedPremade.yarn} and ${pickedPremade.hook}.
        The swatch for this piece should be: ${pickedPremade.swatch}. 
        Pattern: ${pickedPremade.pattern}`)
}