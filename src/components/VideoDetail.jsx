import { CheckCircle } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import {Link, useParams} from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'
const VideoDetail = () => {

  const [videoDetail,setVideoDetail] = useState(null)
  const [relatedVideos,setRelatedVideos] = useState(null)

  const {id} =useParams();

  // fetches the data as soon as the component loads
  useEffect(()=>{
    // fetch the actual video which is clicked
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0]))

      // to fetch all reated videos of the channel in the right side
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=>setRelatedVideos(data.items))
  },[id])


  if(!videoDetail?.snippet){
    return 'Loading...'
  }

  //destructuring required data from videoDetail
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount , likeCount}} = videoDetail;

  return (
    <Box minHeight="93vh">
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top: '55px' }}>
            <ReactPlayer url={ `https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'variant', md:'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap="20px">
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>

            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
        <Videos videos={relatedVideos} direction ='column' />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
