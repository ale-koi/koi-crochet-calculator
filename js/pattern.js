/*importing [○･｀Д´･○] */
import {step, description} from "./nav.js"


/*giving you the pattern with all the measurements s(・｀ヘ´・;)ゞ */
export function givingThePattern(){
let patternType= JSON.parse(sessionStorage.getItem('patternType'));
let userCardiganMeasu = JSON.parse(sessionStorage.getItem('userCardiganMeasurements'))
let userHalterMeasu = JSON.parse(sessionStorage.getItem('userHalterMeasurements'));
let userCoverMeasu = JSON.parse(sessionStorage.getItem('userCoverMeasurements'))
let userSwatch = JSON.parse(sessionStorage.getItem('userSwatchNumbers'))
description.remove()


    if (patternType == "cardigan-perso"){
    let cardiganFirstRowBack = parseInt(userSwatch[0].stitches) * parseInt(userCardiganMeasu[2].back) / 10;
    let cardiganTotalRows = parseInt(userSwatch[1].rows) * parseInt(userCardiganMeasu[0].height) / 10;
    let cardiganSleeveStitches = parseInt(userCardiganMeasu[2].back / 2) * parseInt(userSwatch[0].stitches) / 10;
    let cardiganSleeveRows = parseInt(userSwatch[1].rows)  * parseInt(userCardiganMeasu[2].back) / 10;
    let cardiganFirstRowFrontPanel = parseInt(userCardiganMeasu[2].back /2) * parseInt(userSwatch[0].stitches) / 10
    step.innerHTML=
    `
    <div id="patternInstructions" class="intructions">
        <h4>Square Cardigan:</h4>
            <h5>You'll need ${Math.ceil(cardiganTotalRows)} rows to complete your garment</h5>
            <ul>
            <li>First, crochet every one of the pieces, making sure to follow the instructions.</li>
            <li>After those are done, sew them putting both the *right sides* together.</li>
            <li>Remember to block your project!</li>
            <li>You can add ribbing to the piece if you want, check here for instructions! <a src="https://www.youtube.com/watch?v=gGEm104uDRs" target="_blank">Link to video!</a></li>
            </ul>
            <img src="../images/star.svg">
            <h5> Back Panel</h5>
            <ul>
                <li>For your back panel, start by chaining ${Math.ceil(cardiganFirstRowBack)} + 2 for your turning chain.</li>
                <li>Using Double Crochet, complete ${Math.ceil(cardiganTotalRows)} rows without any type of decrease or increase</li>
                <li>Just make one of this.</li>
                </ul>
        </div>
        <div id="patternInstructions" class="intructions">
                <img src="../images/star.svg">
                <h5> Front Panel:</h5>
                <ul>
                    <li>For your back panel, start by chaining ${Math.ceil(cardiganFirstRowFrontPanel)} + 2 for your turning chain.</li>
                    <li>Using Double Crochet, complete ${Math.ceil(cardiganTotalRows)} rows without any type of decrease or increase</li>
                    <li>Make two of these.</li>
                    </ul>

                    <img src="../images/star.svg">
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
                        <li>This garment is made bottom-up. You'll start with the widest part of your top.</li>
                        <li>After you finish the main part, you'll need to do the ties.</li>
                        <li>Remember to block your project!</li>
                        </ul>
                        <img src="../images/yarn-black.svg">
                        <h5>To keep in mind:</h5>
                        <ul>
                            <li>You can start decreasing a little after or little before the pattern says so.</li>
                            <li>If the decrease is going too fast, you skip one row of decrease.</li>
                            <li>When you're decreasing, put a marker stitch to keep the count.</li>
                            </ul>
                    </div>
                    <div id="patternInstructions" class="intructions">
                            <img src="../images/star.svg">
                            <h5> Pattern</h5>
                            <ul>
                                <li>Foundation: Chain ${Math.ceil(topFirstRow)} + 2 for your turning chain.</li>
                                <li>Row 1: 1 sc, 1 hdc all around, ch1 if you finished in hdc, or ch2 if you finished in sc. </li>
                                <li>Row 2-4: if you finished in hdc: 1sc, 1 hdc all around. If you finished the previous row with a sc, start with a hdc.</li>
                                <li>Row 5 - ${Math.ceil(topTotalRows)}: dec, 1 sc or 1 hdc depending on what you finished on, dec.</li>
                                <li>You can always try it on the body before finishing it and adjust if necessary. </li>
                                </ul>

                                <img src="../images/star.svg">
                            <h5>For the ties:</h5>
                            <ul>
                                <li>Make a slipknot and put your hook through the last stich on the corner of the piece (this could be done with either of the corners), and chain 1, keep chaining until the ties reach your desired length, do that with the rest of the corners.</li>
                                
                                </ul>
                    </div>
        `
        
    } else if(patternType == "cover-perso"){
        
        let coverFirstRow = parseInt(userSwatch[0].stitches) * parseInt(userCoverMeasu[1].width) / 10;
        let coverTotalRows = parseInt(userSwatch[1].rows) * parseInt(userCoverMeasu[0].height) / 10;

        while (parseInt(coverFirstRow) % 3 !== 0){
            coverFirstRow++
        }
        
            console.log(coverFirstRow)
        step.innerHTML=`
        <div id="patternInstructions" class="intructions">
                        <h4>Cover up:</h4>
                        <h5>You'll need ${Math.ceil(coverTotalRows)} rows to complete your garment</h5>
                        <ul>
                        <li>This garment consist of two identical pieces sewn together.</li>
                        <li>You can decide how open or droppy it can be by deciding where to sew on the shoulders.</li>
                        <li>Remember to block your project!</li>
                        </ul>
                        <img src="../images/star.svg">
                        <h5>To keep in mind:</h5>
                        <ul>
                            <li>This pattern needs to start with a multiple of 3, but don't worry, the calculator should have given you such a number.</li>
                            <li>If you're a beginner, marking the first and last stitch always help with counting.</li>
                            <li>Once you have the two pieces, put both pieces together, mark from the edges to the point you want to be your neckline to be, then sew them together either with a tapestry needle or using slipstitch, making sure the hook goes through both pieces.</li>
                            
                            
                            </ul>
                    </div>
                    <div id="patternInstructions" class="intructions">
                            <img src="../images/star.svg">
                            <ul>
                            
                            <li>For the armholes, follow the same process as before, making sure all the sewing is in the same side of the piece. For this, measure from the bottom edge upwards to were you want your armholes to be.</li>
                            </ul>
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
