import './App.css';

import Viewer from './components/viewer'
import AdaptiveSelector from './components/adaptiveSelector'
import DetailTab from './components/detailTab'
import ScannerTab from './components/scannerTab'
import TimingTab from './components/timingTab'
import React, { useState, useEffect } from 'react';

function App() {

  const URN = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWFlc3Ryby10ZXN0LWJ1Y2tldC90ZXN0LnJ2dA'
  const [selectedMode, setSelectedMode] = useState('selector');
  const [selectedModeButtonColor, setSelectedModeButtonColor] = useState('')
  const [isPanelOpen, setPanelOpen] = useState(true);

  const handleButtonClick = (newMode) => {
    setPanelOpen(false);
    setSelectedModeButtonColor(newMode);
    setTimeout(() => {
      setSelectedMode(newMode);
      setPanelOpen(true);
    }, 500); // adjust this to match the duration of your CSS transition
  };

  return (
    <div className={`App ${isPanelOpen ? 'panel-open' : 'panel-closing'}`}>
      <Viewer urn={URN}/>
      {
        (() => {
          switch (selectedMode) {
            case 'selector': return <AdaptiveSelector selectedModeButtonColor={selectedModeButtonColor} setSelectedMode={handleButtonClick}/>;
            case 'TimingTab': return <TimingTab />;
            case 'DetailTab': return <DetailTab setSelectedModeButtonColor={setSelectedModeButtonColor} setSelectedMode={setSelectedMode}/>;
            case 'ScannerTab': return <ScannerTab setSelectedModeButtonColor={setSelectedModeButtonColor} setSelectedMode={setSelectedMode}/>; //selectedModeButtonColor is here to set back the graphics of the adaptiveSelector buttons to white
          }
        })()
      }
    </div>
  );
}

export default App;
