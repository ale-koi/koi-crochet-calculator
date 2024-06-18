/*importing modules o(^・x・^)o */
import {givingThePattern } from "./pattern.js"
import {showingStitch} from "./choice.js"
import {step, btn, description} from "./nav.js"

/*checking if you have a swatch (〃￣д￣)八( ￣д￣ )八(￣д￣〃) */
export function swatchComprobator(){

description.innerHTML= `<p>Time to enter your swatch measurements!ヽ(´▽｀；)/♪</p>`

step.innerHTML=
`
<div id="inputMain">
<h4>For a more accurate calculation:<h4>
<p>Your swatch should have at least 5 stitches and at least 5 rows, and be at 10 cm wide by 10 cm tall done with the same yarn and hook you plan to use for your project.</p>
<br>
<center><h6>Check here if you don't know how to do the stitches</h6></center>
</div>
<div id="inputMainSwatch">
        <div class="input-card-swatch">
            <h5>Number of Stitches:</h5>
        <input type="number" class="swatch-stitches" data-id="userStitches" placeholder="Stitches"></input>
        </div>
        <div class="input-card-swatch">
        <h5>Number of Rows:</h5>
        <input type="number" class="swatch-row" data-id="userRows" placeholder="Rows"></input>
        </div>
        <div class="little-description swatch-box"></div>
</div>
`
    step.appendChild(btn)
    btn.innerText="Next"
        let btnSubmit = document.querySelector(".btn")
            btnSubmit.addEventListener('click', ()=>{
                swatchSubmitter()
        }) 

        let linkSwatch = document.querySelector("h6");
            linkSwatch.addEventListener('click', ()=>{
                showingStitch()
    })    

}

/*checking if the rows and stitches are up to code and sending them to json (┙>∧<)┙へ┻┻ */
function swatchSubmitter(){
    let userStiches = document.querySelector(".swatch-stitches")
    let userRows = document.querySelector(".swatch-row")
    let swatchDesc = document.querySelector(".swatch-box")
    let userSwatch = []
    let swatchStitchesStandard = 5;
    let swatchRowsStandard = 5;
    /* here is the kind of foolproofing （Ω_Ω） */
    let noStitches = (userStiches.value >= swatchStitchesStandard) ? true : false;
    let noRows = (userRows.value >= swatchRowsStandard) ? true : false;

    if (noStitches == true && noRows == true){
        Swal.fire({
            title: "Are you sure this are your measurements?",
            text: `Stitches: ${userStiches.value}, 
            Rows: ${userRows.value}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#262625",
            cancelButtonColor: "#AAA7C3",
            confirmButtonText: "Yes, save them."
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Saved!",
                    text: "Your swatch has been saved!",
                    icon: "success"

                });
                userSwatch.push({stitches: userStiches.value}, {rows: userRows.value})
                sessionStorage.setItem("userSwatchNumbers", JSON.stringify(userSwatch));
                setTimeout(()=>{
                    givingThePattern();     
                }, 1000)
                }
            });
    }else {
        swatchDesc.innerHTML=`
        <p>Remember it must be over 5 stitches and over 5 rows<p>
        `
    }
}