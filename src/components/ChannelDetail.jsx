import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import ChannelCard from './ChannelCard'  
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null);
  const [videos,setVideos]=useState([]);

  const {id} = useParams();  // IMPORTANT

  // console.log(channelDetail,videos)


  useEffect(()=>{  
    // for channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=>setChannelDetail(data?.items[0]));  // sets the first channel that is retrived from the API call 
        // console.log(channelDetail);

   // for fetching videos
    fetchFromAPI(`search?channelID=${id}&part=snippet&order=date`)   
      .then((data)=>setVideos(data?.items));
    },[id]);


    
  return (
    <Box minHeight="95vh" >
      <Box>
        <div 
          style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)', height:'300px',zIndex:10 }} 
        >
        </div>
          <ChannelCard channelDetail={channelDetail} marginTop="-100px"/>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'140px'}}}/>  {/*used in larger screens to center the video cards*/}
        <Videos videos={videos}/>
      </Box>
      
    </Box>
  )
}

export default ChannelDetail
