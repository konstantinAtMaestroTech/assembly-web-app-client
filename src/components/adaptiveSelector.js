import React, { useEffect, useState } from 'react';

export default function AdaptiveSelector({selectedModeButtonColor, setSelectedMode}) {
    
    return (
        <div className='AdaptiveSelector'>
            <button 
            className={`btnScannerTab ${selectedModeButtonColor === 'ScannerTab' ? 'selected' : ''}`}
            onClick={() => setSelectedMode('ScannerTab')}
            >
                Scanner
            </button>
            <button 
            className={`btnDetailTab ${selectedModeButtonColor === 'DetailTab' ? 'selected' : ''}`}
            onClick={() => setSelectedMode('DetailTab')} 
            >
                Details
            </button>
            <button 
            className={`btnTimingTab ${selectedModeButtonColor === 'TimingTab' ? 'selected' : ''}`}
            onClick={() => setSelectedMode('TimingTab')} 
            >
                Time Line
            </button>
        </div>
    )
}