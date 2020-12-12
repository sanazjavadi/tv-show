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
               <div className="homepage__list">
               {shows.map((item) => (
                 <ListItem
                   key={item.show.id}
                   id={item.show.id}
                   image={
                     item.show.image
                       ? item.show.image.medium
                       : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                   }
                   name={item.show.name}
                   rating={
                     item.show.rating.average
                       ? item.show.rating.average
                       : "No rating"
                   }
                 />
               ))}
             </div>
           }
        </div>  
    )
}


export default Homepage