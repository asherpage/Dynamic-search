// src/utils/spotify.js
import axios from 'axios';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const basicAuth = btoa(`${clientId}:${clientSecret}`);

const getToken = async () => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basicAuth}`,
      },
    }
  );
  return response.data.access_token;
};

const searchTracks = async (token, query) => {
  const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.tracks.items;
};

export { getToken, searchTracks };
