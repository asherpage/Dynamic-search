import React from 'react'
import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import '../App.css'
const Searchbar = () => {
    const [search, setSearch] = useState('')
    const handleClick = () =>{
        window.open('https://www.google.com/search?q='+ search, "_blank")
        setSearch("")
    }
    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div className='all'>
      <input
        type="text"
        className="srch"
        placeholder="search"
        id="srch"
        name="srch"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}><FaSearch /></button>
    </div>
  );
};

export default Searchbar