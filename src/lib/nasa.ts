import axios from 'axios';

const NASA_API_KEY = process.env.NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

export const nasaApi = {
  getApod: async () => {
    const response = await axios.get(`${BASE_URL}/planetary/apod`, {
      params: {
        api_key: NASA_API_KEY,
      },
    });
    return response.data;
  },
}; 