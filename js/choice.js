/*importing modules! ┗┐ヽ(′Д、`*)ﾉ┌┛ */
import createImput from "./createInput.js"
import {swatchComprobator} from "./swatch.js"
import {step, btn, title, description} from "./nav.js"



/*arrays for creating the measurements imput （x_x；）*/
const cardiMeasu =["Back", "Length", "Arm"]
const topMeasu =["Bust", "Length"]
const coverMeasu = ["Width", "Length"]

/*world building because keeps crashing <(▰˘◡˘▰)>*/

btn.classList.add("btn")


/* variables for functions ╮(╯▽╰)╭*/
let patternType
let backMeasure
let armMeasure
let lengthMeasure

/*entering the measurements for each pattern >°))))彡 */

export function choice(){
    fetch('../patterns.json') 
    .then((res) => res.json())
    .then((data) => {
            let cardigan = data[0]
            let halter = data[1]
            let coverUp = data[2]  
    
    patternType= JSON.parse(sessionStorage.getItem('patternType'));
    description.innerHTML=
            `
            <p>Please input your measurements! φ（．．）</p>
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
        createImput(cardiMeasu)
    }else if(patternType == "halter-perso"){
        title.innerText= `${halter.name}!`
        step.innerHTML = 
        `
        <div id="inputMain" class="${halter.id}>
            <div class="input-info">${halter.info}</div>
            <div class="input-cards"></div>
        </div>       
        `
        createImput(topMeasu)

    }else if(patternType == "cover-perso"){
        title.innerText= `${coverUp.name}!`
        step.innerHTML = 
        `
        <div id="inputMain" class="${coverUp.id}>
            <div class="input-info">${coverUp.info}</div>
            <div class="input-cards"></div>
        </div>       
        `
        createImput(coverMeasu)
    }

    let linkSwatch = document.querySelector("h6");
    linkSwatch.addEventListener('click', ()=>{
        
        showingStitch()
    })

    step.appendChild(btn)
    btn.innerText="Next"
    let btnSubmit = document.querySelector(".btn")
    btnSubmit.addEventListener('click', ()=>{
        checkingMeasurements()
    })

    /*this for checking if measurements are correct and sending to JSON (ノ><)ノ*/

    function checkingMeasurements() { 
        patternType= JSON.parse(sessionStorage.getItem('patternType'))
        let height = document.querySelector(".Length").value
        if (patternType == "cardigan-perso"){
            let back = document.querySelector(".Back").value 
            let arm = document.querySelector(".Arm").value
            let cardiganMeasurements = []

            backMeasure = (back >= cardigan.measurements.Back) ? true : document.querySelector(".Back-desc").innerHTML=`<p>The smallest size is ${cardigan.measurements.Back} cm.</p>`;

            armMeasure = (arm >= cardigan.measurements.Arm) ? true : document.querySelector(".Arm-desc").innerHTML=`<p>The smallest size is ${cardigan.measurements.Arm} cm.</p>`;

            lengthMeasure = (height >= cardigan.measurements.Height) ? true : document.querySelector(".Length-desc").innerHTML=`<p>The smallest size is ${cardigan.measurements.Height} cm.</p>`;

            if (backMeasure === true && armMeasure === true && lengthMeasure === true){
                Swal.fire({
                    title: "Are you sure these are your measurements?",
                    text: `Back: ${back}cm, 
                    Length: ${height} cm,
                    Arm: ${arm} cm.`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#262625",
                    cancelButtonColor: "#AAA7C3",
                    confirmButtonText: "Yes, save them."
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Saved!",
                            text: "Your Measurements have been saved!",
                            icon: "success"
                        });
                        cardiganMeasurements.push({height: height}, {arm: arm}, {back: back})
                        sessionStorage.setItem('userCardiganMeasurements', JSON.stringify(cardiganMeasurements));
                        setTimeout(()=>{
                            swatchComprobator(); 
                        }, 1000)
                        }
                    });
            }

    } else if(patternType == "halter-perso"){
            const halterMeasurements = []

            let bust = document.querySelector(".Bust").value
            let height = document.querySelector(".Length").value

            let bustMeasure = (bust >= halter.measurements.Bust) ? true : document.querySelector(".Bust-desc").innerHTML=`<p>Our smallest size for this piece is ${halter.measurements.Bust}</p>`;

            let lengthMeasure = (height >= halter.measurements.Height)? true : document.querySelector(".Length-desc").innerHTML=`<p>Our smallest size for this piece is ${halter.measurements.Height}</p>`;

            if (bustMeasure == true && lengthMeasure == true){
                    Swal.fire({
                        title: "Are you sure these are your measurements?",
                        text: `Bust: ${bust} cm, 
                        Length: ${height} cm.`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#262625",
                        cancelButtonColor: "#AAA7C3",
                        confirmButtonText: "Yes, save them!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                title: "Saved!",
                                text: "Your Measurements have been saved!",
                                icon: "success"
                            });
                                halterMeasurements.push({height: height}, {bust: bust})
                                console.log(halterMeasurements)
                                sessionStorage.setItem('userHalterMeasurements', JSON.stringify(halterMeasurements))
                                setTimeout(()=>{
                                swatchComprobator();    
                                }, 1000)
                            }
                        });
                }
    } else if(patternType == "cover-perso"){
        const coverMeasurements = []

        let width = document.querySelector(".Width").value
        let height = document.querySelector(".Length").value

        let widthMeasure = (width>= coverUp.measurements.Width) ? true : document.querySelector(".Width-desc").innerHTML=`<p>Our smallest size for this piece is ${coverUp.measurements.Width}</p>`;

        let lengthMeasure = (height >= coverUp.measurements.Height) ? true : document.querySelector(".Length-desc").innerHTML=`<p>Our smallest size for this piece is ${coverUp.measurements.Height}</p>`;

                if (widthMeasure == true && lengthMeasure == true){
                    Swal.fire({
                        title: "Are you sure these are your measurements?",
                        text: `Width: ${width} cm, 
                        Length: ${height} cm.`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#262625",
                        cancelButtonColor: "#AAA7C3",
                        confirmButtonText: "Yes, save them!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Saved!",
                                text: "Your Measurements have been saved!",
                                icon: "success",
                                confirmButtonColor: "#262625",
                            });
                                coverMeasurements.push({height: height}, {width: width})
                                sessionStorage.setItem('userCoverMeasurements', JSON.stringify(coverMeasurements))
                                setTimeout(()=>{
                                    swatchComprobator();    
                                    }, 1000)
                            }
                        });
            }
        }
    }
})
}

export function showingStitch(){
    Swal.fire({
        title: "Here are the different stitches! ♡",
        text: "Check for your piece.",
        imageUrl: "../images/swatches.webp",
        imageWidth: 400,
        imageHeight: 500,
        imageAlt: "Swatches for projects"
    });
}

