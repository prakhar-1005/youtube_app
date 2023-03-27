import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
// console.log(videos);

    if(!videos?.length) return 'Loading...'
    
    return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,idx)=>(
            <Box key={idx}>
            {/* {console.log(item)} */}
                {item.id.videoId && <VideoCard video={item}/>}  {/*If the data returned is video then fetch the use the Videocard component else use the ChannelCard component*/}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
