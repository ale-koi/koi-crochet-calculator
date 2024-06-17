/*creating the input for measurements （´ω｀♡%） */
export default function createImput(picked){
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

