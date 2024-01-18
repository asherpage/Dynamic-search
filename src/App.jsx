// src/App.js
import React, { useState, useEffect } from 'react';
import { getToken, searchTracks } from './utils/spotify';
import './App.css'; // Import the CSS file
import Searchbar from './components/Search';
import RandomizedQuote from './components/RandomizedQuote';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popup2Visible, setPopup2Visible] = useState(false);
  const [popup3Visible, setPopup3Visible] = useState(false);
  const [popup4Visible, setPopup4Visible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleQuoteClick = () => {
    setPopupVisible(!popupVisible);
  };

  const openPopup2 = () => {
    setPopup2Visible(true);
  };

  const closePopup2 = () => {
    setPopup2Visible(false);
  };
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState('');

  const handleSearch = async () => {
    const accessToken = await getToken();
    setToken(accessToken);

    if (accessToken) {
      const searchResults = await searchTracks(accessToken, query);
      setTracks(searchResults);
    }
  
  }
  // Repeat similar functions for App 3 and App 4

  // ... (remaining code)

  return (
    <div className="container">
      <div id="apps-container">
        <h1>Apps</h1>
        <div className="app-box" id='quote' onClick={handleQuoteClick}>
        </div>
        <div className="app-box" id='spotify' onClick={openPopup2}>
        </div>
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

          {popup2Visible && (
            <div id="popup2-container">
              <div id="popup-header">
                <span id="close-btn" onClick={closePopup2}>&times;</span>
                Spotify
              </div>
              <div id="popup-content2">
                <h1>The Spotify Search</h1>
                <div class="spotify-back">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
      </div>
              </div>
            </div>
          )}

          {/* Repeat similar conditions for Popup 3 and Popup 4 */}
        </div>
      </div>
    </div>
  );
}

export default App;
