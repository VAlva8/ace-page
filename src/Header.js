import './Header.css';
import React from 'react';

function Header() {

    function helpPage(){
        document.getElementById("helpPageContainer").style.display="flex";
        document.getElementById("helpPageBlock").style.display="flex";
    }
    
    function closeHelp(){
        document.getElementById("helpPageContainer").style.display="none";
        document.getElementById("helpPageBlock").style.display="none";
    }
    
    function hiddenReveal(){
        window.location.href = "https://youtube.com/";
    }
    
    return (
        <div>
            <div className="helpPage" id="helpPageContainer">
                    <h1 className="helpTitle">Help</h1>
                    <h2 id="exitButton" onClick={closeHelp}>Exit</h2>
                    <span className="hiddenButton" onClick={hiddenReveal}></span>
                <div className="helpInformationDiv">
                    <h3 className="helpSubtitle">
                        Coordinate System
                    </h3>
                    <p className="helpInformation">
                        Every result will come with a number, letter, and number indicating exactly where the fitting is.<br/>
                        <strong>1st Number -</strong> What wall the fitting is on.<br/>
                        <strong>Letter -</strong> What column the bin for the fitting is on.<br/>
                        <strong>2nd Number -</strong> What row the bin for the fitting is on.<br/>
                    </p>
                    <a className="helpLink" href="youtube.com">Click here for a visual aid.</a>
                </div>
                <div className="helpInformationDiv">
                    <h3 className="helpSubtitle">
                        Common Fittings
                    </h3>
                    <p className="helpInformation">

                    </p>
                </div>
            </div>
            <div id="helpPageBlock">
                sample text
            </div>
            <div className="header">
                <h1 className="pageTitle">Ace Hardware of Kendall Inc's Brass Fitting Index</h1>
                <h1 className="pageTitle help" onClick={helpPage}>Help</h1>
            </div>
        </div>
    );
  }

  export default Header;