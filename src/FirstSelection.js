import React from 'react';
import { useState } from 'react';
import './firstSelection.css';
import MasterData from './MasterData';
import Header from './Header';

var firstChoice = "";
    
var secondChoice = "";

var thirdChoice = "";

var lastChoice = "";

var found = false;

var wrongCount = 0;

function FirstSelection(){
    const [finalFitting, setFinalFitting] = useState(MasterData[140]);

    var secondOptionsSet = new Set([]);

    var secondOptionsHolder = [];

    const [secondOptionsArray, setSecondOptionsArray] = useState([]);

    var thirdOptionsSet = new Set([]);

    var thirdOptionsHolder = [];

    const [thirdOptionsArray, setThirdOptionsArray] = useState([]);

    var finalOptionsSet = new Set([]);

    var finalOptionsHolder = [];

    const [finalOptionsArray, setFinalOptionsArray] = useState([]);

    const firstChoiceInfo = [
        {title: 'FIP', use: 'Water & Natural Gas', image: 'images/FIP.png', option:1, alt: 'Female Iron Pipe',},
        {title: 'MIP', use: 'Water & Natural Gas', image: 'images/MIP.png', option:2, alt: 'Male Iron Pipe',},
        {title: 'Compression', use: 'Water', image: 'images/Compression.png', option:3, alt: 'Compression',},
        {title: 'Flare', use: 'Natural Gas', image: 'images/Flare.png', option:4, alt: 'Flare',},
        {title: 'Hose Barb', use: 'Coupling & Adapters', image: 'images/Hose_Barb.png', option:5, alt: 'Hose Barb',},
        {title: 'FHT', use: 'Repairs & Adapters', image: 'images/Female_Garden_Hose.png', option:6, alt: 'Female Garden Hose Thread',},
        {title: 'MHT', use: 'Repairs & Adapters', image: 'images/Male_Garden_Hose.png', option:7, alt: 'Male Garden Hose Thread',}
    ]

    function makeSelection(choice){

        document.getElementById('userInput2').style.display="flex";


        var selectTwo = document.getElementsByClassName('secondOptions');
        var selectThree = document.getElementsByClassName('thirdOptions');
        var selectFinal = document.getElementsByClassName('finalOptions');
        
        for(var i = 0, length = selectTwo.length; i < length; i++) {
            selectTwo[i].className="userInputOption secondOptions";
       }
       
        for(var i = 0, length = selectThree.length; i < length; i++) {
            selectThree[i].className="userInputOption thirdOptions";
        }

        for(var i = 0, length = selectFinal.length; i < length; i++) {
            selectFinal[i].className="userInputOption finalOptions";
        }

        document.getElementById('userInput3').style.display="none";
        document.getElementById('userInput4').style.display="none";
        document.getElementById('submitButtonContainer').style.display="none";

        var pictures = document.getElementsByClassName('optionImageContainer');

        var greaterDiv = document.getElementsByClassName('userInputOption');

        for(var i = 0, length = pictures.length; i < length; i++) {
             var selected = greaterDiv[i].id;
            
            var currentElement=document.getElementById(selected);
    
            if(selected!="selection"+choice){
                currentElement.className="userInputOption notSelected";
            }else{
                currentElement.className="userInputOption selected";
            }
        }
    
        if(choice===1){
            firstChoice="FIP";
        }else if(choice===2){
            firstChoice="MIP";
        }else if(choice===3){
            firstChoice="Compression";
        }else if(choice===4){
            firstChoice="Flare";
        }else if(choice===5){
            firstChoice="Hose Barb";
        }else if(choice===6){
            firstChoice="FHT";
        }else{
            firstChoice="MHT";
        }

        makeSecondSelection();

    }

    function makeSecondSelection(){
        setSecondOptionsArray([]);
        
        MasterData.forEach(function (item) {
            if(item.type1===firstChoice){
                secondOptionsSet.add(item.type2);
            }
        });

        secondOptionsSet.forEach(function (item) {
            secondOptionsHolder.push(item);     
        })

        secondOptionsHolder.sort();
        
        secondOptionsHolder.forEach(function (item) {
            setSecondOptionsArray((prev) => ([...prev, item]));
        })

        document.getElementById("spacer").scrollIntoView({ behavior: "smooth", block: "end"});

    }

    function secondSelection(item, index){
        document.getElementById('userInput3').style.display="flex";
        document.getElementById('spacer').scrollIntoView({behavior:'smooth', block: 'end'});

        document.getElementById('userInput4').style.display="none";
        document.getElementById('submitButtonContainer').style.display="none";

        var selectThree = document.getElementsByClassName('thirdOptions');
        var selectFinal = document.getElementsByClassName('finalOptions');
       
        for(var i = 0, length = selectThree.length; i < length; i++) {
            selectThree[i].className="userInputOption thirdOptions";
        }

        for(var i = 0, length = selectFinal.length; i < length; i++) {
            selectFinal[i].className="userInputOption finalOptions";
        }

        var greaterDiv = document.getElementsByClassName('secondOptions');

        for(var i=0; i<greaterDiv.length; i++){
            var selected = greaterDiv[i].id;

            var currentElement=document.getElementById(selected);

            if(selected!="secondSelection" + index){
                currentElement.className="userInputOption secondOptions notSelected";
            }else{
                currentElement.className="userInputOption secondOptions selected";                
            }
        }

        secondChoice = item;

        setThirdOptionsArray([]);
        
        MasterData.forEach(function (item) {
            if(item.type1===firstChoice && item.type2===secondChoice){
                thirdOptionsSet.add(item.size1);
            }
        });

        thirdOptionsSet.forEach(function (item) {
            thirdOptionsHolder.push(item);     
        })
        
        thirdOptionsHolder.forEach(function (item) {
            setThirdOptionsArray((prev) => ([...prev, item]));
        })

    }

    function thirdSelection(item, index){
        
        var greaterDiv = document.getElementsByClassName('thirdOptions');
        
        document.getElementById('submitButtonContainer').style.display="none";
        
        var selectFinal = document.getElementsByClassName('finalOptions');

        for(var i = 0, length = selectFinal.length; i < length; i++) {
            selectFinal[i].className="userInputOption finalOptions";
        }
        
        for(var i=0; i<greaterDiv.length; i++){
            var selected = greaterDiv[i].id;
            
            var currentElement=document.getElementById(selected);
            
            if(selected!="thirdSelection" + index){
                currentElement.className="userInputOption thirdOptions notSelected";
            }else{
                currentElement.className="userInputOption thirdOptions selected";                
            }
        }
        
        thirdChoice = item;
        
        setFinalOptionsArray([]);
        
        MasterData.forEach(function (item) {
            if(item.type1===firstChoice && item.type2===secondChoice && item.size1===thirdChoice){
                if(item.secondSize){
                    finalOptionsSet.add(item.size2);
                    document.getElementById('userInput4').style.display="flex";
                    document.getElementById('spacer').scrollIntoView({behavior:'smooth', block: 'start'});
                }else{
                    lastChoice=item.size1;
                    document.getElementById('submitButtonContainer').style.display="flex";
                    document.getElementById('submitButtonContainer').scrollIntoView({behavior:'smooth', block: 'start'});
                    return;
                }
            }
        });
        
        finalOptionsSet.forEach(function (item) {
            finalOptionsHolder.push(item);     
        })
        
        finalOptionsHolder.forEach(function (item) {
            setFinalOptionsArray((prev) => ([...prev, item]));
        })

    }
    
    function finalSelection(item, index){
        document.getElementById('submitButtonContainer').style.display="flex";
        document.getElementById('submitButtonContainer').scrollIntoView({behavior:'smooth', block: 'end'});
        var greaterDiv = document.getElementsByClassName('finalOptions');
        
        for(var i=0; i<greaterDiv.length; i++){
            var selected = greaterDiv[i].id;
            
            var currentElement=document.getElementById(selected);
            
            if(selected!="finalSelection" + index){
                currentElement.className="userInputOption finalOptions notSelected";
            }else{
                currentElement.className="userInputOption finalOptions selected";                
            }
        }

        lastChoice = item; 
    }

    function selectionMade(){

        document.getElementById('searchFunctionContainer').style.display="none";

        for(var i=1; i<5; i++){
            document.getElementById('userInput' + i).style.display="none";
        }

        document.getElementById('submitButtonContainer').style.display="none";

        MasterData.forEach(function (item) {
            if(item.type1===firstChoice && item.type2===secondChoice && item.size1===thirdChoice && item.size2===lastChoice){
                setFinalFitting(item);
            }
        });

        if(finalFitting.secondSize){
            document.getElementById('size2Result').innerHTML=finalFitting.size2;
        }

        document.getElementById('spacer').style.display="none";
        document.getElementById('resultsContainerID').style.display="flex";
        document.getElementById('header').scrollIntoView({behavior:'smooth', block: 'end'});
    }

    function easterEgg(){
        found=true;

        document.getElementById('searchFunctionContainer').style.display="none";

        for(var i=1; i<5; i++){
            document.getElementById('userInput' + i).style.display="none";
        }
        
        document.getElementById('submitButtonContainer').style.display="none";

        document.getElementById('resultsContainerID').style.display="none";
        
        document.getElementById('hiddenButton').style.display="none";

        document.getElementById('easterEggDiv').style.display="flex";

    }

    function easterEggSubmit(){

        var input = "";

        if(found){
            input = document.getElementById('riddleInput').value;
            input.toLocaleLowerCase();
        }

        if(input==="hint"){
            document.getElementById('easterEggInstruction').style.color="black";
            document.getElementById('easterEggInstruction').innerHTML="Everything (regarding percents).";
            document.getElementById('riddleInput').value = "";
        }else if(input==="nvctis"){
            document.getElementById('easterEggInstruction').style.color="black";
            document.getElementById('easterEggInstruction').innerHTML="You're dope for knowing that. Here's another hint: cm to m.";
            document.getElementById('riddleInput').value = "";
        }else if(input!="100" && wrongCount<4){
            document.getElementById('easterEggInstruction').innerHTML="Oops! That's not the right answer, try again.";
            document.getElementById('riddleInput').value = "";
            wrongCount++;
        }else if(input!="100" && wrongCount>=4 && wrongCount<9){
            document.getElementById('easterEggInstruction').innerHTML="Bro, c'mon. For real?";            
            document.getElementById('riddleInput').value = "";
            wrongCount++;
        }else if(input!="100" && wrongCount>=9){
            document.getElementById('easterEggInstruction').innerHTML="Damn. You're trash. Keep trying I guess.";           
            document.getElementById('riddleInput').value = "";
        }else if(input==="100"){
            document.getElementById('easterEggInstruction').innerHTML="You got it!";

            var riddles = document.getElementsByClassName('riddle');

            for(var i=0; i<riddles.length; i++){
                riddles[i].style.display="none";
            }

            document.getElementById("riddleImage").style.display="block";
            document.getElementById("riddleFinalMessage").style.display="flex";
        }
    }

    function searchVerify(){
        var input = document.getElementById('searchInput').value;
        
        for(var i=0; i<input.length; i++){
            if(!isAlphaNumeric(input.charAt(i))){
                document.getElementById('searchInput').value = "";
                document.getElementById('searchInput').placeholder = "Use numbers only, try again.";
                break;
            }
        }
        
        findSku(input);
    }

    function isAlphaNumeric(char){
        return char==='0' || char==='1' || char==='2' || char==='3 '|| char==='4' || char==='5' || char==='6' || char==='7' || char==='8' || char==='9';  
    }

    function findSku(sku){
        var skuFound = false;
        var inputChange = parseInt(sku);

        MasterData.forEach(function (item) {
            if(item.SKU===inputChange){
                skuFound = true;
                document.getElementById('spacer').style.display="none";
                setFinalFitting(item);
            }
        })

        if(skuFound===true){
            document.getElementById('searchFunctionContainer').style.display="none";

            for(var i=1; i<5; i++){
                document.getElementById('userInput' + i).style.display="none";
            }

            if(finalFitting.secondSize){
                document.getElementById('size2Result').innerHTML=finalFitting.size2;
            }
    
            document.getElementById('resultsContainerID').style.display="flex";
        }else{
            document.getElementById('searchInput').value = "";
            document.getElementById('searchInput').placeholder = "That SKU was not found.";

        }
    }

    function enterPress(){
        var input = document.getElementById("searchInput");
        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchSubmitButton").click();
  }
});
    }

    function riddleEnterPress(){
        var input = document.getElementById("riddleInput");
        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("riddleSubmitButton").click();
  }
});
    }

    function dynamicSize1Instruction(type1, type2){
        var stringResult = "temp";

        if(type2==="Cap"){
            stringResult = "Choose the size of the cap:";
            return stringResult;
        }else if(type2==="Tee"){
            stringResult = "Choose the size for all three sides of the tee:";
            return stringResult;
        }

        if(type1==="FIP"){
            if(type2==="Coupling"){
                stringResult = "Choose the largest size of the coupling:";
            }else if(type2==="Elbow"){
                stringResult = "Choose the size for both sides of the elbow:";
            }else if(type2==="MIP"){
                stringResult = "Choose the size for the female side:"
            }else if(type2==="Street Elbow"){
                stringResult = "Choose the size for both the male and female side of the elbow:"
            }
        }else if(type1==="MIP"){
            if(type2==="Ctr Sunk Plug" || type2==="HEX Head Plug" || type2==="SQR Head Plug"){
                stringResult = "Choose the size of the plug:"
            }else if(type2==="Face Bushing" || type2==="HEX Bushing"){
                stringResult = "Choose the largest size of the bushing:"
            }else{
                stringResult = "Choose the diameter of the nipple:"
            }
        }else if(type1==="Compression"){
            if(type2==="Compression"){
                stringResult = "Choose the largest size of the fitting:"
            }else if(type2==="Compression Elbow"){
                stringResult = "Choose the size for both sides of the elbow:"
            }else if(type2==="Delrin Sleeve" || type2==="Sleeve"){
                stringResult = "Choose the size of the sleeve:";
            }else if(type2==="FIP" || type2==="MIP" || type2==="MIP Elbow" || type2==="Sweat"){
                stringResult = "Choose the size of the compression side:"
            }else if(type2==="Insert"){
                stringResult = "Choose the size of the insert:";
            }else if(type2==="Nut"){
                stringResult = "Choose the size of the nut:";
            }
        }else if(type1==="Flare"){
            if(type2==="FIP" || type2==="FIP Elbow" || type2==="MIP" || type2==="MIP Elbow"){
                stringResult = "Choose the size of the flare side:"
            }else if(type2==="Flare"){
                stringResult = "Choose the largest size of the fitting:"
            }else if(type2==="Flare Elbow"){
                stringResult = "Choose the size for both sides of the elbow:"
            }else if(type2==="Forged Short Nut" || type2==="Short Nut"){
                stringResult = "Choose the size of the nut:"
            }else if(type2==="Plug"){
                stringResult = "Choose the size of the plug:"
            }else if(type2==="Swivel Union"){
                stringResult = "Choose the largest size of the swivel union:";
            }
        }else if(type1==="Hose Barb"){
            if(type2==="Coupling"){
                stringResult = "Choose the size for both sides of the hose barb:";
            }else if(type2==="FIP" || type2==="MIP" || type2==="MIP Elbow" || type2==="Swivel Adapter"){
                stringResult = "Choose the size of the hose barb side:"
            }
        }else if(type1==="FHT"){
            stringResult = "Choose the size of the female hose thread side:"
        }else{
            stringResult = "Choose the size of the male hose thread side:";
        }

        return stringResult;
    }

    function dynamicSize2Instruction(type1, type2){
        var stringResult = "temp";

        if(type1==="FIP"){
            if(type2==="Coupling"){
                stringResult = "Choose the other size of the coupling:";
            }else if(type2==="MIP"){
                stringResult = "Choose the size for the male side:"
            }
        }else if(type1==="MIP"){
            if(type2==="Face Bushing" || type2==="HEX Bushing"){
                stringResult = "Choose the size of the bushing you'll reduce to:"
            }else if(type2==="Nipple"){
                stringResult = "Choose the length of the nipple:"
            }else{
                stringResult = "Choose the diameter of the other side of the nipple:"
            }
        }else if(type1==="Compression"){
            if(type2==="Compression"){
                stringResult = "Choose the other size of the fitting:"
            }else if(type2==="FIP"){
                stringResult = "Choose the size of the FIP side of the fitting:"
            }else if(type2==="MIP" || type2==="MIP Elbow"){
                stringResult = "Choose the size of the MIP side of the fitting:";
            }else if(type2==="Sweat"){
                stringResult = "Choose the size of the sweat side of the fitting:";
            }
        }else if(type1==="Flare"){
            if(type2==="FIP" || type2==="FIP Elbow"){
                stringResult = "Choose the size of the FIP side of the fitting:"
            }else if(type2==="Flare"){
                stringResult = "Choose the other size of the fitting:"
            }else if(type2==="MIP" || type2==="MIP Elbow"){
                stringResult = "Choose the size of the MIP side of the fitting:"
            }else if(type2==="Swivel Union"){
                stringResult = "Choose the other size of the swivel union:";
            }
        }else if(type1==="Hose Barb"){
            if(type2==="MIP" || type2==="MIP Elbow" ){
                stringResult = "Choose the size for the MIP side of the fitting:";
            }else if(type2==="FIP"){
                stringResult = "Choose the size of the FIP side of the fitting:"
            }else{
                stringResult = "Choose the other size of the swivel adapter:"
            }
        }else if(type1==="FHT"){
            if(type2==="FIP"){
                stringResult = "Choose the size of the FIP side of the fitting:"
            }else if(type2==="Ice Maker Elbow"){
                stringResult = "Choose the size of the compression side of the fitting:"
            }else if(type2==="MIP"){
                stringResult = "Choose the size of the MIP side of the fitting:"
            }else if(type2==="Swivel Adapter"){
                stringResult = "Choose the other size of the swivel adapter:";
            }
        }else{
            if(type2==="FIP"){
                stringResult = "Choose the size of the FIP side of the fitting:"
            }else{
                stringResult = "Choose the size of the MIP side of the fitting:"
            }
        }

        return stringResult;
    }


    return (
        <div id='firstSelectionComponentDiv'>
            <div id='searchFunctionContainer'>
                <div className='searchInputContainer'>
                    <input className='searchInput' id='searchInput' type="tel" placeholder="Search by SKU..." maxLength={10} onKeyDown={enterPress}></input>
                    <img className='searchButtonIcon' id='searchSubmitButton' onClick={searchVerify} src='images/Magnifying_Glass.svg'></img>
                </div>
            </div>

            <img className="hiddenButton" onClick={easterEgg} id='hiddenButton' src='images/moon.png'/>

            <div className="userInput" id='userInput1'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction1">Choose the type for the fitting:</h1>
                </div>

                <div className="userInputOptionDiv">
                    {firstChoiceInfo.map((firstChoiceInfo, index) => {
                        return <div title={firstChoiceInfo.alt} className="userInputOption" id={"selection" + firstChoiceInfo.option} onClick={() => {makeSelection(firstChoiceInfo.option)}} key={index}>
                                    <h1 className="userInputOptionText">{firstChoiceInfo.title}</h1>
                                    <p className="userInputOptionInformation">{firstChoiceInfo.use}</p>
                                    <div className="optionImageContainer">
                                        <img className="optionImage" draggable='false' src={firstChoiceInfo.image}/>
                                    </div>
                                </div>})}
                </div>
            </div>
            

            <div className='userInput' id='userInput2'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction2">Choose the other type for the fitting:</h1>
                </div>
                <div className='userInputOptionDiv'>
                {secondOptionsArray.map((item, index) => {
                        return<div className="userInputOption secondOptions" key={index} id={"secondSelection" + index} onClick={() => {secondSelection(item,index)}}>
                        <h1 className="userInputOptionText">{item}</h1>
                        <div className="secondOptionImageContainer">
                            <img className="optionImage" draggable='false' src={'images/' + firstChoice + '/' + item + '.jpg'}/>
                        </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='userInput' id='userInput3'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction3">{dynamicSize1Instruction(firstChoice,secondChoice)}</h1>
                </div>
                <div className='userInputOptionDiv'>
                {thirdOptionsArray.map((item, index) => {
                        return<div className="userInputOption thirdOptions" key={index} id={"thirdSelection" + index} onClick={() => {thirdSelection(item,index)}}>
                        <h1 className="userInputOptionText">{item}</h1>
                        </div>
                    })}
                </div>
            </div>

            <div className='userInput' id='userInput4'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction4">{dynamicSize2Instruction(firstChoice,secondChoice)}</h1>
                </div>
                <div className='userInputOptionDiv'>
                {finalOptionsArray.map((item, index) => {
                        return<div className="userInputOption finalOptions" key={index} id={"finalSelection" + index} onClick={() => {finalSelection(item,index)}}>
                        <h1 className="userInputOptionText">{item}</h1>
                        </div>
                    })}
                </div>
            </div>

            <div className='submitButtonDiv' id='submitButtonContainer'>
                <button className='finalButton' id='submitButton' onClick={selectionMade}>
                    Submit
                </button>
            </div>

            <div className='spacer' id='spacer'>
                Test
            </div>

            <div className='resultsContainer' id='resultsContainerID'>
                <div className='resultsDiv'>
                    <p className='resultsHeading'>Your fitting</p>
                    <p className='resultsInformation'><strong className='resultsStrong'>{finalFitting.type1}</strong> {(finalFitting.toAdd===true) && ("to") } <strong className='resultsStrong'>{finalFitting.type2}</strong></p>
                    <p className='resultsInformation'><strong className='resultsStrong'>{finalFitting.size1}</strong> {(finalFitting.secondSize===true) && ("to") } <strong className='resultsStrong' id="size2Result">{finalFitting.secondSize===true && finalFitting.size2}</strong></p>
                    <div className="finalOptionImageContainer">
                        <img className="optionImage resultsImage" draggable='false' src={'images/' + finalFitting.type1 + '/' + finalFitting.type2 + '.jpg'}/>
                    </div>
                    <div className='resultsSkuDiv'>
                        <span className='resultsSkuBackground' style={{backgroundColor:finalFitting.color}}>
                            <p className='resultsSku'>{finalFitting.SKU}</p>
                        </span>
                    </div>
                    <br/>
                    <p className='resultsHeading'>Is located at</p>
                    <p className='resultsInformation'><strong className='resultsStrong'>Wall</strong>: {finalFitting.wall},
                    <strong className='resultsStrong'> Column</strong>: {finalFitting.column},
                     and <strong className='resultsStrong'>Row</strong>: {finalFitting.row}</p>
                     <a  className='productLink' target='_blank' href={'https://www.acehardware.com/search?query=' + finalFitting.SKU}>Check Ace's website for product availability.</a>
                </div>
                <a className='newFittingLink' href='http://valva8.github.io/ace-page/'>
                    <span className='newFittingButton'>Search for New Fitting</span>
                </a>
            </div>

            <div className='easterEggDiv' id='easterEggDiv'>
                <h1 className='easterEggTitle'>YOU DID IT!</h1>
                <h2 className='easterEggSubtitle'>You found my easter egg!</h2>
                <h2 className='easterEggInstructions' id='easterEggInstruction'>Now solve my riddle for your prize.</h2>
                <div className='riddleContainer'>
                    <p className='riddle'>If you keep me you are honest</p>
                    <p className='riddle'>Marker of an ideal till</p>
                    <p className='riddle'>I'm everything, not beyond it</p>
                    <p className='riddle'>And the largest, most frustrated bill</p>
                    <p className='riddle'>What am I?</p>
                    <img id='riddleImage' src='images/Reward.jpg'/>
                    <p className='riddle' id='riddleFinalMessage'>You solved the riddle! Send me a pic of this page for $10 reward!</p>
                </div>

                <div className='riddleInputContainer'>
                    <input className='riddleInput' id='riddleInput' placeholder='Input your answer...' maxLength={35} onKeyDown={riddleEnterPress}></input>
                    <img src='images/Send.svg' className='riddleSubmitButton' id='riddleSubmitButton' onClick={easterEggSubmit}/>
                </div>
            </div>


        </div>
    );


}

export default FirstSelection;