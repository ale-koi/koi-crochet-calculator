/* importing the other modules (´o・┏ω┓・o｀) */
import {choice} from "./choice.js"
import {step, title, description} from "./nav.js"


calculator()
/* setting up the calculator o(；△；)o */
export function calculator(){
    
    title.innerText = "Calculator"
    step.innerHTML= ""
    description.innerHTML=
    `
    <p>What are we doing today?ヾ(ﾟ∀ﾟゞ)</p>

    <p>These are the options we have at the moment! Keep an eye for updates!</p>
    `
    fetch('../patterns.json') 
        .then((res) => res.json())
        .then((data) => {
            for (const e of data){
                step.innerHTML += `
            <div id="productCard" class="${e.id}" tabindex="-1" data-id="${e.id}">
                <img src="${e.pic}">
                <h4>${e.name}</h4>
                <p>${e.description}</p>
            </div>
            `
        }
            document.querySelectorAll("#productCard").forEach(btn =>{
                btn.addEventListener('click', () =>{
                    const selectionID = btn.getAttribute('data-id');
                    sessionStorage.setItem('patternType', JSON.stringify(selectionID))
                    choice()
                })
            })
        })
}
