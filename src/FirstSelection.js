import React from 'react';
import { useState } from 'react';
import './firstSelection.css';
import MasterData from './MasterData';

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
        {title: 'FIP', use: 'Water and Natural Gas', image: 'images/FIP.png', option:1, alt: 'Female Iron Pipe',},
        {title: 'MIP', use: 'Water and Natural Gas', image: 'images/MIP.png', option:2, alt: 'Male Iron Pipe',},
        {title: 'Compression', use: 'Water', image: 'images/Compression.png', option:3, alt: 'Compression',},
        {title: 'Flare', use: 'Natural Gas', image: 'images/Flare.png', option:4, alt: 'Flare',},
        {title: 'Hose Barb', use: 'Coupling and Adapters', image: 'images/Hose_Barb.png', option:5, alt: 'Hose Barb',},
        {title: 'FHT', use: 'Repairs and Adapters', image: 'images/Female_Garden_Hose.png', option:6, alt: 'Female Garden Hose Thread',},
        {title: 'MHT', use: 'Repairs and Adapters', image: 'images/Male_Garden_Hose.png', option:7, alt: 'Male Garden Hose Thread',}
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

        var information = document.getElementsByClassName('userInputOptionInformation');

        var greaterDiv = document.getElementsByClassName('userInputOption');

        for(var i = 0, length = pictures.length; i < length; i++) {
             var selected = greaterDiv[i].id;

             pictures[i].style.display="none";

             information[i].style.display="none";
            
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

        console.log(firstChoice);
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
    }

    function secondSelection(item, index){
        document.getElementById('userInput3').style.display="flex";
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

        console.log(firstChoice);
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
                }else{
                    lastChoice=item.size1;
                    document.getElementById('submitButtonContainer').style.display="flex";
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
        for(var i=1; i<5; i++){
            document.getElementById('userInput' + i).style.display="none";
        }

        document.getElementById('submitButtonContainer').style.display="none";

        MasterData.forEach(function (item) {
            if(item.type1===firstChoice && item.type2===secondChoice && item.size1===thirdChoice && item.size2===lastChoice){
                setFinalFitting(item);
            }
        });

        console.log(finalFitting);

        if(finalFitting.secondSize){
            document.getElementById('size2Result').innerHTML=finalFitting.size2;
        }

        document.getElementById('resultsContainerID').style.display="flex";
    }

    function easterEgg(){
        found=true;
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
        }else if(input==="nvctis"){
            document.getElementById('easterEggInstruction').style.color="black";
            document.getElementById('easterEggInstruction').innerHTML="You're dope for knowing that. Here's another hint: cm to m.";
        }else if(input!="100" && wrongCount<4){
            document.getElementById('easterEggInstruction').innerHTML="Oops! That's not the right answer, try again.";
            wrongCount++;
        }else if(input!="100" && wrongCount>=4 && wrongCount<9){
            document.getElementById('easterEggInstruction').innerHTML="Bro, c'mon. For real?";            
            wrongCount++;
        }else if(input!="100" && wrongCount>=9){
            document.getElementById('easterEggInstruction').innerHTML="Damn. You're trash. Keep trying I guess.";           
        }

        console.log(wrongCount);
    }


    return (
        <div id='firstSelectionComponentDiv'>

            <img className="hiddenButton" onClick={easterEgg} id='hiddenButton' src='images/moon.png'/>

            <div className="userInput" id='userInput1'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction1">Choose the type for the fitting.</h1>
                </div>

                <div className="userInputOptionDiv">
                    {firstChoiceInfo.map((firstChoiceInfo, index) => {
                        return <div title={firstChoiceInfo.alt} className="userInputOption" id={"selection" + firstChoiceInfo.option} onClick={() => {makeSelection(firstChoiceInfo.option)}} key={index}>
                                    <h1 className="userInputOptionText">{firstChoiceInfo.title}</h1>
                                    <p className="userInputOptionInformation">{firstChoiceInfo.use}</p>
                                    <div className="optionImageContainer">
                                        <img className="optionImage" src={firstChoiceInfo.image}/>
                                    </div>
                                </div>})}
                </div>
            </div>
            

            <div className='userInput' id='userInput2'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction2">Choose the other type for the fitting.</h1>
                </div>
                <div className='userInputOptionDiv'>
                {secondOptionsArray.map((item, index) => {
                        return<div className="userInputOption secondOptions" key={index} id={"secondSelection" + index} onClick={() => {secondSelection(item,index)}}>
                        <h1 className="userInputOptionText">{item}</h1>
                        </div>
                    })}
                </div>
            </div>

            <div className='userInput' id='userInput3'>
                <div className='userInputInstructionText'>
                    <h1 className="userInputInstruction" id="instruction3">Choose the first size of fitting you're looking for.</h1>
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
                    <h1 className="userInputInstruction" id="instruction4">Choose the other size of fitting you're looking for.</h1>
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

            <div className='resultsContainer' id='resultsContainerID'>
                <div className='resultsDiv'>
                    <p className='resultsHeading'>Your fitting</p>
                    <p className='resultsInformation'><strong className='resultsStrong'>{finalFitting.type1}</strong> {(finalFitting.secondSize===true) && ("to") } <strong className='resultsStrong'>{finalFitting.type2}</strong></p>
                    <p className='resultsInformation'><strong className='resultsStrong'>{finalFitting.size1}</strong> {(finalFitting.secondSize===true) && ("to") } <strong className='resultsStrong' id="size2Result">{finalFitting.secondSize===true && finalFitting.size2}</strong></p>
                    <br/>
                    <p className='resultsHeading'>Is located at</p>
                    <p className='resultsInformation'><strong className='resultsStrong'>Wall</strong>: {finalFitting.wall},
                    <strong className='resultsStrong'> Column</strong>: {finalFitting.column},
                     and <strong className='resultsStrong'>Row</strong>: {finalFitting.row}</p>
                </div>
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
                </div>

                <div className='riddleInputContainer'>
                    <input className='riddleInput' id='riddleInput' placeholder='Input your answer...' maxLength={35}></input>
                    <button className='riddleSubmitButton' onClick={easterEggSubmit}>Submit Answer</button>
                </div>
            </div>


        </div>
    );


}

export default FirstSelection;