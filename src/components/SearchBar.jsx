import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper,IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e)=>{  // e is the submit event
    e.preventDefault();

    if(searchTerm){   // i.e. iif something is typed in the search bar
      navigate(`/search/${searchTerm}`)

      setSearchTerm("")
    }
  }

  
  return (
    <>
        {/*Paper is just a div with a white (or other color) background which appears to be elevated*/} 
        <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
        >   
            <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <IconButton type='submit' sx={{p:"10px", color:'red'}}> 
                <Search />
            </IconButton>
        </Paper>
    </>

  )
}

export default SearchBar
