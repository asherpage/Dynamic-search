import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import RandomizedQuote from './components/RandomizedQuote';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleQuoteClick = () => {
    // Toggle the popup visibility when the 'quote' div is pressed
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="container">
      <div id="apps-container">
        <h1>Apps</h1>
        <div className="app-box" id='quote' onClick={handleQuoteClick}>
        </div>
        <div className="app-box">App 2</div>
        <div className="app-box">App 3</div>
        <div className="app-box">App 4</div>
      </div>
      <div className='searchbar-box'>
        <h1>PBrowser</h1>
        <Searchbar />
        <div>

          {popupVisible && (
            <div id="popup-container">
              <div id="popup-header">
                <span id="close-btn" onClick={closePopup}>&times;</span>
                Random Quote App
              </div>
              <div id="popup-content">
                <RandomizedQuote />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
