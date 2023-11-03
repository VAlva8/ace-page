import './Header.css';
import FirstSelection from './FirstSelection';
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
    
    return (
        <div>
            <div className="helpPage" id="helpPageContainer">
                    <div className='helpAndExit'>       
                        <h1 className="helpTitle">Help</h1>
                        <h2 id="exitButton" onClick={closeHelp}>Exit</h2>
                    </div>
                    <h3 className='helpInformation helpDisclaimer'>
                    Please note, the index leads you to where the fitting SHOULD be. This won't account for the misplacement of the fitting.
                    </h3>
                <div className="helpInformationDiv">
                    <h3 className="helpSubtitle" style={{marginTop: 0,}}>
                        Coordinate System
                    </h3>
                    <p className="helpInformation">
                        Every result will come with a number, letter, and number indicating exactly where the fitting is.
                    </p>
                    <p className='helpInformation indent'>
                            <strong>1st Number -</strong> What wall the fitting is on.
                    </p>
                    <p className='helpInformation indent'>
                            <strong>Letter -</strong> What column the bin for the fitting is on.
                    </p>
                    <p className='helpInformation indent'>
                            <strong>2nd Number -</strong> What row the bin for the fitting is on.
                    </p>
                </div>
                <div className="helpInformationDiv">
                    <h3 className="helpSubtitle">
                        Tips for Searching
                    </h3>
                    <p className="helpInformation">
                        -   When choosing a fitting, anything not FIP or MIP goes first. For example, 
                        "<strong>Compression</strong> to <strong>FIP</strong>" or "<strong>Flare</strong> to <strong>MIP</strong>".
                    </p>
                    <p className="helpInformation">
                        -   When choosing an adapter from FIP to MIP or MIP to FIP, if the fitting is not found then try flipping the order.
                    </p>
                    <p className='helpInformation'>
                        -   If unfamiliar with the acronyms, hover over the first options for the full name.
                    </p>
                    <p className='helpInformation'>
                        -   To reset the page to find a a new fitting, simply refresh the page.
                    </p>
                    <p className="helpInformation" style={{marginBottom: "0rem",}}>
                        -   Needles Valves, Drain Cocks, Saddle Valves, and Ground Plugs were not included in this index.
                    </p>
                    <p className="qRCodeLink">
                        Hover for QR Code for phone access.
                    </p>
                    <h3 className='helpInformation developedBy'>
                        Developed by <a className='developedByLink' href='https://www.linkedin.com/in/victor-alvarez-780441274/'>Victor Alvarez</a>.
                    </h3>
                    <div className='qRCodeFlexContainer'>
                        <div className='qRCodeDiv'>
                            <img src="images/Qr Code.png" className='qRCodeImage'/>
                        </div>
                    </div>
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