import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import RandomizedQuote from './components/RandomizedQuote';
import Accordion from './components/Accordion';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeApp, setActiveApp] = useState(null);

  const openPopup = (appId) => {
    setPopupVisible(true);
    setActiveApp(appId);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setActiveApp(null);
  };

  const handleAppClick = (appId) => {
    // Toggle the popup visibility for the clicked app
    if (activeApp === appId) {
      closePopup();
    } else {
      openPopup(appId);
    }
  };

  return (
    <div className="container">
      <div id="apps-container">
        <div className="app-box" id='app1' onClick={() => handleAppClick('Quote Gen')}>
        </div>
        <div className="app-box" id='app2' onClick={() => handleAppClick('Spotify')}>
        </div>
        <div className="app-box" id='app3' onClick={() => handleAppClick('Accordion')}>
        </div>
        <div className="app-box" id='app4' onClick={() => handleAppClick('Github')}>
        </div>
      </div>
      <div className='searchbar-box'>
        <h1>PBrowser</h1>
        <Searchbar />
        <div>
          {popupVisible && (
            <div id="popup-container">
              <div id="popup-header">
                <span id="close-btn" onClick={closePopup}>&times;</span>
                {`${activeApp}`}
              </div>
              <div id="popup-content">
                {activeApp === 'Quote Gen' && (
                    <p><RandomizedQuote /></p>
                )}
                {activeApp === 'Spotify' && (
                  <div className="spotify">
                    <iframe class="spotify-thing" src="https://open.spotify.com/embed/playlist/1wk1MCKKS71Vd39eDyloXl?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                )}
                {activeApp === 'Accordion' && (
                  <div class="about-back"><div className="about-me">
      <div className="about-me-content">
        <div className="about-me-details">
          <h2>Asher Page</h2>
          <p>
            Hi, I'm Asher! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin consectetur arcu vitae felis dapibus, vel euismod elit ultricies.
            Nulla facilisi. Duis fermentum arcu ut semper cursus.
            Nullam auctor, elit eget tincidunt consequat, libero arcu volutpat justo,
            ut euismod elit ligula vel justo.
          </p>
        </div>
      </div>
    </div><Accordion /></div>
                )}
                {activeApp === 'Github' && (
                  <div >
                    <h1 class="github-title">Github Repo Links</h1>
                  <div class="github-container">
                    <a href='https://github.com/asherpage/Website-Coding-Development'><div class="boxes" id='aa'></div></a>
                    <a href='https://github.com/KDavis006/blackJack'><div class="boxes" id='blackj'></div></a>
                    <a href='https://github.com/asherpage'><div class="boxes" id='github-logo'></div></a>
                    </div>
                    </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
