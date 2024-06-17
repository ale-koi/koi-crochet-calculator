/* making the page exist (^ Q ^)/゛ */
import {step, title, description} from "./nav.js"
const listForMiniMenu = document.createElement("div")
listForMiniMenu.classList.add("mini-menu-body")
const mainHomeOptions = [
    {
        id: "calculator",
        name: "Calculator",
        pic: "./images/calculator-black.svg",
        url: "./pages/calculator.html"
    },
    {
        id: "premade-patterns",
        name:"Pre-Made Patterns",
        pic: "./images/yarn-black.svg",
        url:"./pages/premade.html"
    },
    
]

/* Main for when people need the main ヽ(≧Д≦)ノ*/

mainHome()
function mainHome(){
    description.style.display = ""
    step.innerHTML=''
    title.innerText = `Welcome!`
    description.innerHTML= `
    <p>Welcome to Koi's crochet calculator!
    <p>Select what you tool want to use clicking the options below. Happy crocheting!</p>
    `
    step.appendChild(listForMiniMenu);

    let homeMainOptions = ""
    for (const p of mainHomeOptions){
        homeMainOptions += 
        `
        <a href=${p.url}><div id="mainHomeOptions" class="${p.id} mini-menu">
            <img src="${p.pic}">
            <h3>${p.name}</h3>
        </div></a>
        `
    }
    listForMiniMenu.innerHTML = homeMainOptions    
}

