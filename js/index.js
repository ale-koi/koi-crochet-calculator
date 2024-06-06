const personalizedPatterns = [
    {
        id: "cardigan-perso",
        name: 'Cardigan',
        pic: 'https://picsum.photos/400',
        measurements:{
            Back: 20,
            Arm: 20,
            Height: 35,
        },
        swatch: `Double Crochet Stitch.`,
        pattern: `I still wonder if I need this`,
        description: `Simple cardigan, good for spring and autumn. 
        A good big project to start with!`,
        info: `
        <ul>
        <h4>This pattern requires a:<br> 10*10 cm swatch done in Double Crochet.</h4><br> 
        <center><p>If you don't know how to do it, check this <a src="">insert here link </p>
        <li> <strong>For your back:<strong> measure between your shoulders</li>
        <li> For your length: shoulder to hips for full length, shoulder to waist for cropped look. You can go longer or shorter if you want!</li>
        <li>For your arm: Rest your hand on your waist, measure from shoulder to wirst following the shape of the bent arm </li>
        </ul>
        `
    },
    {
        id: "halter-perso",
        name: 'Halter Top',
        pic: 'https://picsum.photos/400',
        measurements:{
            Bust: 70, 
            Height: 35,
        },
        swatch: `Lemon peel stitch.`,
        pattern: `I still wonder if I need this`,
        description: `Perfect top for summer or a music festival!
        Add colors to match your style.`,
        info:  `
        <ul>
        <h4>This pattern requires a:<br> 10*10 cm swatch done in Lemon Peel </h4><br> 
        <center><p>If you don't know how to do it, check this <a src="">insert here link </p>
        <li> <strong>For your bust:<strong> measure around the most prominent part of your chest, leaving two fingers between your body and the measuring tape.</li>
        <li> For your length: measure from your neck to navel or hips.</li>
        </ul>
        `

    },
    {
        id: "cover-perso",
        name: 'Cover up',
        pic: 'https://picsum.photos/400',
        measurements:{
            Height: 35,
            Width: 20,
        },
        swatch: `Treble crochet V-Stitch`,
        pattern: `I still wonder if I need this`,
        description: `Going to the beach?
        What a perfect companion!`,
        info:  `
        <ul>
        <h4>This pattern requires a:<br> 10*10 cm swatch done in Treble crochet V-Stitch </h4><br> 
        <center><p>If you don't know how to do it, check this <a src="">insert here link </p>
        <li> <strong>For your width:<strong> One option is measuring shoulder to shoulder, or could make it sloucher by measuring from arm to arm going over your chest.</li>
        <li> For your length: shoulder to hips for full length, shoulder to waist for cropped look. You can go longer or shorter if you want!</li>
        </ul>
        `
    },
]

const premadePatterns = [
    {
        id: "premade-1",
        name: "Strawberry Plushie",
        pic: "https://picsum.photos/200",
        tags: {
            tag1: "Amigurumi",
            tag2: "All"
        },
        description: "a strawberry",
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
        id: "premade-2",
        name: "Flower Coaster",
        pic: "https://picsum.photos/200",
        tag: "Decor",
        description: "a coaster",
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
        id: "premade-3",
        name: "Bucket hat",
        pic: "https://picsum.photos/200",
        tag: "Wearable",
        description: "a hat",
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
    {
        id: "premade-4",
        name: "Market Bag",
        pic: "https://picsum.photos/200",
        tag: "Bags",
        description: "a bag",
        pattern:`
        <p>Materials:</p>

        Worsted weight cotton yarn (about 400-500 yards)
        5.0 mm crochet hook
        Yarn needle
        Scissors
        Abbreviations:
        
        ch: chain
        sc: single crochet
        dc: double crochet
        sl st: slip stitch
        Pattern:
        
        Base:
        
        Start with a magic ring, ch 3 (counts as first dc).
        Make 11 dc into the magic ring. Join with a sl st to the top of the beginning ch 3. (12 dc)
        Ch 3, 2 dc in each stitch around. Join with a sl st to the top of the beginning ch 3. (24 dc)
        Ch 3, 1 dc in next stitch, 2 dc in next stitch, repeat from * to * around. Join with a sl st to the top of the beginning ch 3. (36 dc)
        Ch 3, 1 dc in next 2 stitches, 2 dc in next stitch, repeat from * to * around. Join with a sl st to the top of the beginning ch 3. (48 dc)
        Ch 3, 1 dc in next 3 stitches, 2 dc in next stitch, repeat from * to * around. Join with a sl st to the top of the beginning ch 3. (60 dc)
        Sides:
        
        Ch 2 (counts as first hdc), hdc in each stitch around. Join with a sl st to the top of the beginning ch 2. (60 hdc)
        Ch 2, hdc in each stitch around. Join with a sl st to the top of the beginning ch 2. (60 hdc)
        Repeat round 2 until the bag measures desired height (typically around 10-12 inches).
        Handles:
        
        On opposite sides of the bag, skip 15 stitches (or as desired) and attach yarn.
        Ch 2, hdc in next 15 stitches.
        Turn, ch 2, hdc in each stitch across.
        Repeat row 3 until the handle measures desired length (typically around 8-10 inches).
        Fasten off and weave in ends.
        Repeat for the other handle.
        Finishing:
        
        Weave in all ends securely.
        Optionally, you can add a decorative border or attach a lining to the bag for extra stability.
        That's it! You now have a simple crochet market bag. Feel free to customize the pattern by adjusting the size, adding stripes, or incorporating different stitches for texture. Happy crocheting!
        `
    },
    {
        id: "premade-5",
        name: "Rabbit",
        pic: "https://picsum.photos/200",
        tag: "Amigurumi",
        description: "a rabbit",
        pattern: `
        Materials:

Worsted weight yarn in desired colors (main color for the rabbit, contrasting color for the overalls)
3.5 mm crochet hook
Safety eyes or black yarn for eyes
Yarn needle
Scissors
Fiberfill stuffing
Abbreviations:

ch: chain
sc: single crochet
inc: increase (2 sc in the same stitch)
dec: decrease (single crochet 2 stitches together)
Rabbit Body:

Start with the rabbit's body in the main color.

        `,
    },
    {
        id: "premade-6",
        name: "Doll",
        pic: "https://picsum.photos/200",
        tag: "amigurumi",
        description: "a doll",
        pattern:`
        Materials:

Worsted weight yarn in desired skin tone and clothing colors
3.5 mm crochet hook
Safety eyes or black yarn for eyes
Yarn needle
Scissors
Fiberfill stuffing
Optional: yarn for hair, embroidery thread for mouth and other details
Abbreviations:

ch: chain
sc: single crochet
inc: increase (2 sc in the same stitch)
dec: decrease (single crochet 2 stitches together)
hdc: half double crochet
dc: double crochet
Body:

Start with the doll's body in the skin tone color.


        `,
    },
    {
        id: "premade-6",
        name: "Bird",
        pic: "https://picsum.photos/200",
        tag: "Amigurumi",
        description: "a birb",
        pattern:`Materials:

        Worsted weight yarn in desired colors (for the body, wings, beak, and feet)
        3.5 mm crochet hook
        Safety eyes or black yarn for eyes
        Yarn needle
        Scissors
        Fiberfill stuffing
        Abbreviations:
        
        ch: chain
        sc: single crochet
        inc: increase (2 sc in the same stitch)
        dec: decrease (single crochet 2 stitches together)
        hdc: half double crochet
        sl st: slip stitch
        Pattern:
        
        Body:
        
        Start with the bird's body color.
        `,
    },
    {
        id: "premade-7",
        name: "Poncho",
        pic: "https://picsum.photos/200",
        tag: "Wearable",
        description: "a poncho",
        pattern:`
        Materials:

Worsted weight yarn in desired color (about 400-500 yards)
5.5 mm crochet hook
Yarn needle
Scissors
Abbreviations:

ch: chain
sc: single crochet
dc: double crochet
hdc: half double crochet
sl st: slip stitch
Pattern:

Body:

Start with a chain that measures from the base of the neck to the desired length of the poncho.


        `  
    }
]

const mainHomeOptions = [
    {
        id: "calculator",
        name: "Calculator",
        pic: "./images/calculator-black.svg"
    },
    {
        id: "premade-patterns",
        name:"Pre-Made Patterns",
        pic: "./images/yarn-black.svg"
    },
    
]

const mainMenuOptions = [
    {
        id: "home",
        name: "Home",
    },
    ...mainHomeOptions,
]

const cardiMeasu =["Back", "Length", "Arm"]
const topMeasu =["Bust", "Length"]
const coverMeasu = ["Width", "Length"]

/*Making the HTML look pog!!!! (´┏o┓｀)*/
const title = document.createElement("h1")
const description = document.createElement("div")
const step = document.createElement("div")
const btn = document.createElement("button")
const bubble = document.createElement("div")
const mainforbubble = document.createElement("main")
const mainbody = document.body;
const titleBox = document.createElement("div")
const listForMiniMenu = document.createElement("div")
const navMenu = document.querySelector("menu")
const navMenuList = document.createElement("ul")
const formSelect = document.createElement("form") 
const inputNumbers = document.createElement("input")
const swatchBox = document.createElement("div")
const inputBox = document.querySelector(".input-cards")
const linksMenu = document.createElement("div")

/* making the page exist (^ Q ^)/゛ */
navMenu.appendChild(navMenuList)
mainbody.appendChild(mainforbubble)
mainforbubble.appendChild(bubble)
bubble.classList.add("main-bubble")
bubble.appendChild(titleBox)
titleBox.classList.add("title-container")
titleBox.appendChild(title)
bubble.appendChild(description)
description.classList.add("step-description")
bubble.appendChild(step)
step.classList.add("main-step")
step.appendChild(listForMiniMenu)
listForMiniMenu.classList.add("mini-menu-body")
swatchBox.classList.add("box-swatch")
linksMenu.classList.add("link-menu")

/*variables varias (-^-^)p_____|_o____q(^-^ ) */
const cardigan = personalizedPatterns[0];
const halter = personalizedPatterns[1];
const coverUp = personalizedPatterns[2];

/* 3 million variables for good luck (*＾▽＾)／ */
let patternType
let picked
let back
let arm
let height
let width
let bust 
let backDesc
let armDesc
let heightDesc
let widthDesc
let bustDesc

/*Menu options pog ⊆（⌒◎⌒）⊇ */
mainMenuOptions.forEach((mainMenuOption) => {
    const item = document.createElement("li")
    item.innerHTML= `
    <h2 id="menuButton" class=${mainMenuOption.id} >
    ${mainMenuOption.name}
    </h2>
    `
    navMenuList.appendChild(item)
})

/*the pages!*/
/* Main for when people need the main ヽ(≧Д≦)ノ*/


mainHome()


function mainHome(){
    description.style.display = ""
    linksMenu.style.display = "none"
    step.innerHTML=''
    title.innerText = `Welcome!`
    description.innerHTML= `
    <p>Welcome to Koi's crochet calculator!
    <p>Select what you want to use clicking the options below. Happy crocheting!</p>
    `
    step.appendChild(listForMiniMenu);

    let homeMainOptions = ""
    for (const p of mainHomeOptions){
        homeMainOptions += 
        `
        <div id="mainHomeOptions" class="${p.id} mini-menu">
            <img src="${p.pic}">
            <h3>${p.name}</h3>
        </div>
        `
    }
    listForMiniMenu.innerHTML = homeMainOptions
    miniMenuButtons()
    
}

/*little events for home+menu | ｀Д´| this could be done with less lines I guess two functions there (((＠°▽°＠)八(＠°▽°＠)))*/

let pickedHome = document.querySelector(".home")
pickedHome.addEventListener("click", () =>{
    mainHome()
})

function miniMenuButtons(){
document.querySelectorAll(".calculator").forEach(btn => {
    btn.addEventListener('click', () => {

        calculatorPage()
    });
  });

document.querySelectorAll(".premade-patterns").forEach(btn => {
    btn.addEventListener('click', () => {
      makingPremadeoptions()
    });
  });
}


/*empty arrays for the JSON (^ц^ ) */
const cardiganMeasurements = []
const halterMeasurements = []
const coverMeasurements = []

/*calculator m{oYo}屮 */
function calculatorPage(){
    description.style.display = ""
    linksMenu.style.display = "none"
    
    miniMenuButtons()
    title.innerText = "Calculator!"
    description.innerHTML=
    `
    <p>First, pick what kind of garment you'd like to make:</p>

    <p> These are the options we have at the moment!</p>
    `

    let calculatorOptions = ""
    for (const p of personalizedPatterns){
        calculatorOptions += `
        <div id="productCard" class="${p.id}" tabindex="-1" data-id="${p.id}">
            <img src="${p.pic}">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
        </div>
        `
        }
    step.innerHTML= calculatorOptions
    document.querySelectorAll("#productCard").forEach(btn =>{
        btn.addEventListener('click', () =>{
            const selectionID = btn.getAttribute('data-id');
            sessionStorage.setItem('patternType', JSON.stringify(selectionID))
            choice()
        })
    }) 
}

/*the crossroads previous to measurements ▼o・ェ・o▼*/

function choice (){
    miniMenuButtons()

    patternType= JSON.parse(sessionStorage.getItem('patternType'));
    description.innerHTML=
            `
            <p>Please imput your measurements!</p>
            `

            
    if (patternType == "cardigan-perso"){
        title.innerText= `${cardigan.name}!`
        step.innerHTML = 
        `
        <div id="inputMain" class="${cardigan.id}>
            <div class="input-info">${cardigan.info}</div>
            <div class="input-cards"></div>
        </div>       
        `
        picked = cardiMeasu
        createImput()
    }else if(patternType == "halter-perso"){
        title.innerText= `${halter.name}!`
        step.innerHTML = 
        `
        <div id="inputMain" class="${halter.id}>
            <div class="input-info">${halter.info}</div>
            <div class="input-cards"></div>
        </div>       
        `
        picked = topMeasu
        createImput()

    }else if(patternType == "cover-perso"){
        title.innerText= `${coverUp.name}!`
        step.innerHTML = 
        `
        <div id="inputMain" class="${coverUp.id}>
            <div class="input-info">${coverUp.info}</div>
            <div class="input-cards"></div>
        </div>       
        `
        picked = coverMeasu
        createImput()
    
    }
    step.appendChild(btn)
    btn.innerText="Next"
    btn.classList.add("btn-submit")
    let btnSubmit = document.querySelector(".btn-submit")
    btnSubmit.addEventListener('click', ()=>{
        checkingMeasurements()
    })
}

function createImput(){
    let cardBox = document.querySelector(".input-cards")
    picked.forEach((measurements) =>{
                cardBox.innerHTML +=
                `
                <div class="input-card ${measurements}-measurement">
                <div class="text-input">
                <h5>${measurements} measurement:</h5><input placeholder="${measurements}" type="number" data-id="${measurements}-measu" class="${measurements}" id="dataCollector"></input></div>
                </div>
                <div class="little-description ${measurements}-desc"></div>
                `
            })
    
}


let heightV 
let armV 
let backV 
let bustV
let widthV 
let backMeasure
let armMeasure
let lengthMeasure
let widthMeasure
let bustMeasure


/*checking measurements*/
function checkingMeasurements() { /*change this （＾～＾） */
        back = document.querySelector(".Back")
        arm = document.querySelector(".Arm")
        height = document.querySelector(".Length") 
        width = document.querySelector(".Width")
        bust = document.querySelector(".Bust")

        backDesc = document.querySelector(".Back-desc")
        armDesc = document.querySelector(".Arm-desc")
        heightDesc = document.querySelector(".Length-desc")
        widthDesc = document.querySelector(".Width-desc")
        bustDesc = document.querySelector(".Bust-desc")

    if (patternType == "cardigan-perso"){
        backMeasure = (back.value >= cardigan.measurements.Back) ? true : false;
        armMeasure = (arm.value >= cardigan.measurements.Arm) ? true : false;
        lengthMeasure = (height.value >= cardigan.measurements.Height) ? true : false;

             if (backMeasure == false){
                backDesc.innerHTML=`<p>Our smallest size for this piece is ${cardigan.measurements.Back}</p>`
             } 
             if (armMeasure == false){
                armDesc.innerHTML=`<p>Our smallest size for this piece is ${cardigan.measurements.Arm}</p>`
             }
             if (lengthMeasure == false){
                heightDesc.innerHTML=`<p>Our smallest size for this piece is ${cardigan.measurements.Height}</p>`
             }
        if (backMeasure == true && armMeasure == true && lengthMeasure == true){
            cardiganMeasurements.push({height: height.value}, {arm: arm.value }, {back: back.value})
            sessionStorage.setItem('userCardiganMeasurements', JSON.stringify(cardiganMeasurements))
            swatchComprobator ()
        }
    } else if(patternType == "halter-perso"){
            bustMeasure = (bust.value >= halter.measurements.Bust) ? true : false;
            lengthMeasure = (height.value >= halter.measurements.Height)? true : false;

            if (bustMeasure == false){
                bustDesc.innerHTML=`<p>Our smallest size for this piece is ${halter.measurements.Bust}</p>`
            } 
            if (lengthMeasure == false){
                heightDesc.innerHTML=`<p>Our smallest size for this piece is ${halter.measurements.Height}</p>`
            }
                if (bustMeasure == true && lengthMeasure == true){
                    halterMeasurements.push({height: height.value}, {bust: bust.value})
                sessionStorage.setItem('userHalterMeasurements', JSON.stringify(halterMeasurements))
                swatchComprobator ()
                }

    } else if(patternType == "cover-perso"){
        widthMeasure = (width.value >= coverUp.measurements.Width) ? true : false;
        lengthMeasure = (height.value >= coverUp.measurements.Height) ? true : false;
            if (widthMeasure == false){
                widthDesc.innerHTML=`<p>Our smallest size for this piece is ${coverUp.measurements.Width}</p>`
            } 
            if (lengthMeasure == false){
                heightDesc.innerHTML=`<p>Our smallest size for this piece is ${coverUp.measurements.Height}</p>`
            }
                if (widthMeasure == true && lengthMeasure == true){
                coverMeasurements.push({height: height.value}, {width: width.value})
                sessionStorage.setItem('userCoverMeasurements', JSON.stringify(coverMeasurements))
                swatchComprobator ()
        }
        }
    }


/*swatch part (*￣(ｴ)￣*) */
    let swatchStitchesStandard = 5;
    let swatchRowsStandard = 5;
    let userSwatch = []
    const swatchMeasu = ["Stitches", "Rows"]

function swatchComprobator (){
    miniMenuButtons()
    description.innerHTML=
    `
    `
    step.innerHTML=
    `
    <div id="inputMain">
    <p>For a more accurate calculation:<p>
    <p>Your swatch should have at least 5 stitches and at least 5 rows, and be at 10 cm wide by 10 cm tall done with the same yarn and hook you intent to use for your project.</p>
    <br>
    <ul>
    <li>For our top: ${cardigan.swatch}</li>
    <li>For our halter: ${halter.swatch}</li>
    <li>For our cover up: ${coverUp.swatch}</li>
    </div>
    <div id="inputMainSwatch">
            <div class="input-card-swatch">
                <h5>Number of Stitches:</h5>
            <input type="number" class="swatch-stitches" data-id="userStitches"></input>
            </div>
            <div class="input-card-swatch">
            <h5>Number of Rows:</h5>
            <input type="number" class="swatch-row" data-id="userRows"></input>
            </div>
            <div class="little-description swatch-box"></div>
    </div>
    `
    step.appendChild(btn)
    btn.innerText="Next"
    btn.classList.add("btn-submit-swatch")
    btn.classList.remove("btn-submit")
    let btnSubmit = document.querySelector(".btn-submit-swatch")
    btnSubmit.addEventListener('click', ()=>{
        swatchSubmitter()
    }) /*why is this button reading the previous function? (ノ#-_-)ノ */
}

let userStiches
let userRows
let swatchDesc
let swatch

function swatchSubmitter(){
    userStiches = document.querySelector(".swatch-stitches")
    userRows = document.querySelector(".swatch-row")
    swatchDesc = document.querySelector(".swatch-box")

    let noStitches = (userStiches.value >= swatchStitchesStandard) ? true : false;
    let noRows = (userRows.value >= swatchRowsStandard) ? true : false;

    if (noStitches == true && noRows == true){
        userSwatch.push({stitches: userStiches.value}, {rows: userRows.value})
        sessionStorage.setItem("userSwatchNumbers", JSON.stringify(userSwatch));
        givingThePattern()
    }else {
        swatchDesc.innerHTML=`
        <p>Remember it must be over 5 stitches and over 5 rows<p>
        `
    }
}

let userCoverMeasu
let userCardiganMeasu
function givingThePattern(){
    description.innerText=""
    swatch = JSON.parse(sessionStorage.getItem('userSwatchNumbers'));
    patternType= JSON.parse(sessionStorage.getItem('patternType'));
    userCardiganMeasu = JSON.parse(sessionStorage.getItem('userCardiganMeasurements'))
    userHalterMeasu = JSON.parse(sessionStorage.getItem('userHalterMeasurements'));
    userCoverMeasu = JSON.parse(sessionStorage.getItem('userCoverMeasurements'))

    if (patternType == "cardigan-perso"){
    let cardiganFirstRowBack = parseInt(userSwatch[0].stitches) * parseInt(userCardiganMeasu[2].back) / 10;
    let cardiganTotalRows = parseInt(userSwatch[1].rows) * parseInt(userCardiganMeasu[0].height) / 10;
    let cardiganSleeveStitches = parseInt(userCardiganMeasu[2].back / 2) * parseInt(userSwatch[0].stitches) / 10;
    let cardiganSleeveRows = parseInt(userSwatch[1].rows)  * parseInt(userCardiganMeasu[2].back) / 10;
    let cardiganFirstRowFrontPanel = parseInt(userCardiganMeasu[2].back / 2) * parseInt(userSwatch[0].stitches) / 10
    step.innerHTML=
    `
    <div id="patternInstructions" class="intructions">
        <h4>Square Cardigan:</h4>
            <h5>You'll need ${Math.ceil(cardiganTotalRows)} rows to complete your garment</h5>
            <ul>
            <li>First, crochet every one of the pieces, making sure to follow the instructions</li>
            <li>After those are done, sew them putting both <strong>right sides</strong> together</li>
            <li>Remember to block your project!</li>
            <li>You can add ribbing to the piece if you want, check here for instructions! <a src="">link</a></li>
            </ul>
            <img src="./images/star.svg">
            <h5> Back Panel</h5>
            <ul>
                <li>For your back panel, start by chaining ${Math.ceil(cardiganFirstRowBack)} + 2 for your turning chain.</li>
                <li>Using Double Crochet, complete ${Math.ceil(cardiganTotalRows)} rows without any type of decrease or increase</li>
                <li>Just make one of this.</li>
                </ul>
        </div>
        <div id="patternInstructions" class="intructions">
                <img src="./images/star.svg">
                <h5> Front Panel:</h5>
                <ul>
                    <li>For your back panel, start by chaining ${Math.ceil(cardiganFirstRowFrontPanel)} + 2 for your turning chain.</li>
                    <li>Using Double Crochet, complete ${Math.ceil(cardiganTotalRows)} rows without any type of decrease or increase</li>
                    <li>Make two of these.</li>
                    </ul>

                    <img src="./images/star.svg">
                <h5>Sleeves:</h5>
                <ul>
                    <li>For your sleeves, back panel, start by chaining ${Math.ceil(cardiganSleeveStitches)}+ 2 for your turning chain.</li>
                    <li>For your desired length, you'll need ${Math.ceil(cardiganSleeveRows)} rows, but you can try it on to decide if that's okay. Remember, before blocking, the piece will look smaller. </li>
                    <li>Make two of these.</li>
                    <li>You can add ribbing to them!</li>
                    </ul>
        </div>

`
    } else if (patternType == "halter-perso"){
        
        let topFirstRow = parseInt(userSwatch[0].stitches) * parseInt(userHalterMeasu[1].bust) / 10;
        let topTotalRows = parseInt(userSwatch[1].rows) * parseInt(userHalterMeasu[0].height) / 10;
        step.innerHTML= 
        `
        <div id="patternInstructions" class="intructions">
                    <h4>Halter Top:</h4>
                        <h5>You'll need ${Math.ceil(topTotalRows)} rows to complete your garment</h5>
                        <ul>
                        <li>This garment is made bottom up. You'll start with the widest part of your top.</li>
                        <li>After you finish the main part, you'll need to do the ties</li>
                        <li>Remember to block your project!</li>
                        </ul>
                        <img src="./images/yarn-black.svg">
                        <h5>To keep in mind:</h5>
                        <ul>
                            <li>You can start decreasing a little after or little before the pattern says so.</li>
                            <li>If the decrease is going too fast, you skip one row of decrease. </li>
                            <li>For that last step, put a marker stitch to keep the count.</li>
                            </ul>
                    </div>
                    <div id="patternInstructions" class="intructions">
                            <img src="./images/star.svg">
                            <h5> Pattern</h5>
                            <ul>
                                <li> Foundation: Chain ${Math.ceil(topFirstRow)} + 2 for your turning chain.</li>
                                <li>Row 1: 1 sc, 1 hdc all around, ch1 if you finished in hdc, or ch2 if your finished in sc. </li>
                                <li>Row 2-4: if you finished in hdc: 1sc, 1 hdc all around. If you finished the previous row with a sc, start with a hdc.</li>
                                <li>Row 5 - ${Math.ceil(topTotalRows)}: dec, 1 sc or 1 hdc depending on what you finished on, dec.</li>
                                <li>You can always taste on the body before finishing it. </li>
                                </ul>

                                <img src="./images/star.svg">
                            <h5>For the ties:</h5>
                            <ul>
                                <li>Here goes the instructions</li>
                                
                                </ul>
                    </div>
        `
    } else if(patternType == "cover-perso"){
        
        let coverFirstRow = parseInt(userSwatch[0].stitches) * parseInt(userCoverMeasu[1].width) / 10;
        let coverTotalRows = parseInt(userSwatch[1].rows) * parseInt(userCoverMeasu[0].height) / 10;

        
        while (coverFirstRow % 3 !== 0){
            coverFirstRow++
        }
        
        step.innerHTML=`
        <div id="patternInstructions" class="intructions">
                    <h4>cover up:</h4>
                        <h5>You'll need ${Math.ceil(coverTotalRows)} rows to complete your garment</h5>
                        <ul>
                        <li>This garment consist of two identical pieces sewn together.</li>
                        <li>You can decide how open or droppy it can be by deciding where to sew on the shoulders. </li>
                        <li>Remember to block your project!</li>
                        </ul>
                        <img src="./images/star.svg">
                        <h5>To keep in mind:</h5>
                        <ul>
                            <li>This pattern needs to start with a multiple of 3, but don't worry, the calculator should have given you such a number.</li>
                            <li>If your a beginner, marking the first and last stitch always help with counting.</li>
                            <li>Once you have the two pieces, put both pieces together, mark from the edges to the point you want to be your neckline to be, then sew them together either with a tapestry neddle or usin slipstitch, making sure the hook goes through both pieces.</li>
                            <li>For the armholes, follow the same process as before, making sure all the sewing is in the same side of the piece. For this, measure from the bottom edge upwards to were you want your armholes to be.</li>
                            
                            </ul>
                    </div>
                    <div id="patternInstructions" class="intructions">
                            <img src="./images/star.svg">
                            <h5> Pattern</h5>
                            <ul>
                                <li> Foundation: Chain ${parseInt(coverFirstRow)} + 4 for your turning chain.</li>
                                <li>Row 1: 1 tr on the 5th chain from the hook, ch2, 1tr on the same stitch, skip 2ch, [1 tr, ch2, 1 tr on the same stitch] {skip 2sts, Repeat what's inside[] to the end of your chain} chain 4, turn your work.</li>
                                <li>Row 2: on the same stitch of the last tr, 1 tr, this forms your first v. {skip 2 sts, (1tr, ch2, 1 tr on the same stitch)} keep repeating until the last V. Your last V should done between the first tr of the previous row and the first ch4.</li>
                                <li>Row 3 - ${Math.ceil(coverTotalRows)}: kept repeating Row 2</li>
                                <li>Optional last row: 1 row of sc all around the piece</li>
                                </ul>

                    </div>`
    }
}


//premade part (°◇°;)
const linksForMenu = ["Wearable" , "Amigurumi", "Decor", "Bags", "All"]
function makingPremadeoptions() {

    title.innerText = "Premade Patterns!"
    description.style.display = "none"
    bubble.appendChild(linksMenu)
    linksMenu.style.display = ""

    let quickMenu = ""

    for (const p of linksForMenu){
        quickMenu +=
        `
        <li data-id="${p}" class="quick-menu">${p}</li>
        `
    }

    linksMenu.innerHTML=`
    <ul>
    ${quickMenu}
    </ul>
    `
    document.querySelectorAll('.quick-menu').forEach(btn => {
        btn.addEventListener('click', () => {
          const filterPattern = btn.getAttribute('data-id');
            showFilter(filterPattern)
        })
    })
    showingAllOptions()
    
    
}


function showingAllOptions(){
    let premadeOptions=""
for (const p of premadePatterns){
    premadeOptions +=
    `
    <div class="premade-card">
                <img src="${p.pic}">
                <h2>${p.name}</h2>
                <p>${p.description}</p>
                 <div class="premade-button" data-id="${p.id}">see more</div>
                 </div>
    `
}

step.innerHTML= `
    <div id="premadeCards">${premadeOptions}</div>
    `
    btnSeeMore()
}

function btnSeeMore(){
    document.querySelectorAll('.premade-button').forEach(btn => {
        btn.addEventListener('click', () => {
          const premadeChoice = btn.getAttribute('data-id');
          
          showOption(premadeChoice)
        })
    })
}


function showOption(premadeChoice){
    linksMenu.remove()
    const premadePicked = premadePatterns.find((pattern) => pattern.id === premadeChoice);

    step.innerHTML= `
    <div id="premadeInstructions" class="intructions">
    
    <div class ="premade-text">
    <h5>${premadePicked.name}</h5>
    ${premadePicked.pattern}</div>

    <img src="${premadePicked.pic}">
    </div>
    `
    
}

function showFilter(filterPattern){

   let filteredPattern = premadePatterns.filter((pattern) => pattern.tag == filterPattern);

let filtered =""
    filteredPattern.forEach((p) =>{
        filtered +=
        `
        <div class="premade-card">
                    <img src="${p.pic}">
                    <h2>${p.name}</h2>
                    <p>${p.description}</p>
                     <div class="premade-button" data-id="${p.id}">see more</div>
                     </div>
        `
    })  
    step.innerHTML= filtered

    if(filterPattern === "All"){
        showingAllOptions()
    }
    btnSeeMore()
}