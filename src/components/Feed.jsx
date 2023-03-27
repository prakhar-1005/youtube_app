import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);


  // fetches videos when the page loads
  useEffect(()=>{

     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items));

  },[selectedCategory]);

  
  return (
    <Stack sx={{flexDirection: {sx:"column" , sm:"row"} }}>  {/*IMPORTANT*/}
      
      <Box sx={{height:{sx:'auto' , sm:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0,sm: 2}}} >

        {/*Two components - The Sidebar & The videos*/}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />


        <Typography className='copyright' variant="body2" sx={{mt:1.5, color:'#fff'}} >
            Copyright 2023 @PP-media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto' , height:'90vh' , flex:2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'#fff'}}>
          {selectedCategory} <span style={{color:'#FC1503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
