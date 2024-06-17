import {step, title} from "./nav.js"

//premade part (°◇°;)
makingPremadeoptions()

export function makingPremadeoptions() {
    let linksMenu = document.querySelector(".link-menu")
    const linksForMenu = ["All", "Wearable" , "Amigurumi", "Decor", "Bags" ]
    title.innerText = "Premade Patterns!"
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
    eventsForMiniMenu()
    
}

function eventsForMiniMenu(){
    document.querySelectorAll('.quick-menu').forEach(btn => {
        btn.addEventListener('click', () => {
        const filterPattern = btn.getAttribute('data-id');
        showFilter(filterPattern)
        })
    })
    showingAllOptions()
}

function showingAllOptions(){
    step.innerHTML=""
    
    fetch('../premade-patterns.json')
    .then((res) => res.json())
    .then((data) =>{
        let premadeOptions=""
        for (const p of data){
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
})
}

function showFilter(filterPattern){
    // step = document.querySelector(".main-step")
    fetch('../premade-patterns.json')
    .then((res) => res.json())
    .then((data) =>{
            
    let filteredPattern = data.filter((pattern) => pattern.tag == filterPattern);
    
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
    })
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
    fetch('../premade-patterns.json')
    .then((res) => res.json())
    .then((data) =>{
    const premadePicked = data.find((pattern) => pattern.id === premadeChoice);
    step.innerHTML= `
    <div id="premadeInstructions" class="intructions">
    
    <div class ="premade-text">
    <h5>${premadePicked.name}</h5>
    ${premadePicked.pattern}</div>
    <img src="${premadePicked.pic}">
    </div>
    `
})
}
