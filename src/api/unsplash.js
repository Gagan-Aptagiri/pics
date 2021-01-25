import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y5h4O0nsfC_LycrWkbqsOEYmFwKorww3j-smviL6BHQ",
  },
});
