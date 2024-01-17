import React, { useState, useEffect } from 'react';

const RandomizedQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleRefresh = () => {
    fetchRandomQuote();
  };

  return (
    <div class="quote-container">
      <h2>Random Quote</h2>
      <h3>{quote}</h3>
      <p>{author}</p>
      <button onClick={handleRefresh}>New Quote</button>
    </div>
  );
};

export default RandomizedQuote;
