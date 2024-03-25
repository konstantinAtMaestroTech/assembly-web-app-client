import React, { useState } from 'react';

export default function DetailTab({setSelectedModeButtonColor, setSelectedMode}) {

    const [isScannerPanelOpen, setScannerPanelOpen] = useState(true);

    const handleClick = (newMode) => {
        console.log(newMode);
        setScannerPanelOpen(false);
        setTimeout(() => {
          setSelectedMode(newMode);
          setSelectedModeButtonColor('');
          setScannerPanelOpen(true);
        }, 500); // adjust this to match the duration of your CSS transition
    };
    
    return (
        <div className={`DetailTab ${isScannerPanelOpen ? 'panel-open' : 'panel-closing'} commonTabClass`}>
            <button 
            className='btnBack'
            onClick={() => handleClick('selector')}
            >
                Back
            </button>
            <div
            className='divInfo'
            >
                SELECT AN ELEMENT TO GET DETAILED INFORMATION
            </div>
        </div>
    )
}
