import React from 'react';
import './firstSelection.css';

function FirstSelection(){
    const fitting = ["", "", "" , ""];

    var optionChosen = 0;

    const choiceInfo = [
        {title: 'FIP', use: 'Water and Natural Gas', image: 'images/FIP.png', option:1,},
        {title: 'MIP', use: 'Water and Natural Gas', image: 'images/MIP.png', option:2,},
        {title: 'Compression', use: 'Water', image: 'images/Compression.png', option:3,},
        {title: 'Flare', use: 'Water and Natural Gas', image: 'images/Flare.png', option:4,},
        {title: 'Hose Barb', use: 'Coupling and Adapters', image: 'images/Hose_Barb.png', option:5,},
        {title: 'Garden Hose', use: 'Repairs and Adapters', image: 'images/Garden_Hose.png', option:6,},
    ]

    function makeSelection(choice){
        optionChosen=choice;
        document.getElementById("instruction1").style.display="none";
        var pictures = document.getElementsByClassName('optionImageContainer');
        var information = document.getElementsByClassName('userInputOptionInformation');
        var greaterDiv = document.getElementsByClassName('userInputOption');
        for(var i = 0, length = pictures.length; i < length; i++) {
             var selected = greaterDiv[i].id;
             pictures[i].style.display="none";
             information[i].style.display="none";
            
            var currentElement=document.getElementById(selected);
    
            if(selected!="selection"+choice){
                currentElement.style.opacity="50%";
                currentElement.style.userSelect="none";
                currentElement.style.backgroundColor="white";
                currentElement.style.color="black";
            }else{
                currentElement.style.opacity="100%";
                currentElement.style.backgroundColor="#080808";
                currentElement.style.color="white";
            }
        }
    
        if(choice===1){
            fitting[0]="FIP";
        }else if(choice===2){
            fitting[0]="MIP";
        }else if(choice===3){
            fitting[0]="Compression";
        }else if(choice===4){
            fitting[0]="Flare";
        }else if(choice===5){
            fitting[0]="Hose_Barb";
        }else{
            fitting[0]="Garden_Hose";
        }

        console.log(fitting);
    }

    return (
        <div className="userInput">
            <div>
                <h1 className="userInputInstruction" id="instruction1">Choose the type of fitting you're looking for</h1>
            </div>


            <div className="userInputOptionDiv">
                {choiceInfo.map((choiceInfo) => {
                    return         <div className="userInputOption" id={"selection" + choiceInfo.option} onClick={() => {makeSelection(choiceInfo.option)}}>
                    <h1 className="userInputOptionText">{choiceInfo.title}</h1>
                    <p className="userInputOptionInformation">{choiceInfo.use}</p>
                    <div className="optionImageContainer">
                        <img className="optionImage" src={choiceInfo.image}/>
                    </div>
                </div>
                })}
            </div>
        </div>
    );


}

export default FirstSelection;