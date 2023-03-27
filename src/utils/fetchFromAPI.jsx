import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '84c576a16emshedb4b18127fefa6p1a66d2jsn22397a83927e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const fetchFromAPI= async (url)=>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,options);   // extract data from the json result
    return data;
};

