//rafce gives us a basic functional component
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar, Feed, VideoDetail,ChannelDetail, SearchFeed} from './components';

const app = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Feed/>} />  {/* to understand what is 'exact' attribute - https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path*/}
            <Route path='/video/:id' element={<VideoDetail/>} />
            <Route path='/channel/:id' exact element={<ChannelDetail/>} />
            <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default app
