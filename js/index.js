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
        <h4>This pattern requires a:<br> 10*10 cm swatch done in Double Crochet.</h4> 
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


/*variables varias (-^-^)p_____|_o____q(^-^ ) */
const cardigan = personalizedPatterns[0];
const halter = personalizedPatterns[1];
const coverUp = personalizedPatterns[2];