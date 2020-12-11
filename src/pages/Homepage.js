import { useContext } from 'react'

//context
import ShowsContext from '../context/shows/showsContext'

//components
import SearchBar from '../components/Searchbar'
import Loader from '../components/Loader'
import ListItem from '../components/ListItem'

const Homepage = () => {

    const showsContext = useContext(ShowsContext)
    const {loading, shows} = showsContext
 
    
    return(
        <div>
           <SearchBar />

           {
               loading ?  <Loader/> :
               shows && shows.map(show => {
                   return(
          <ListItem show="show"/>
                   )
               })
           }
        </div>  
    )
}


export default Homepage