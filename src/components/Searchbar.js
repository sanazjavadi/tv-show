

import React, {useContext, useState} from 'react'

//context
import ShowsContext from '../context/shows/showsContext'

export default function Searchbar(props) {
    
   const showscontext = useContext(ShowsContext)
   const  {searchShows} = showscontext
   const [searchTerm, setSearchTerm] = useState('');
   
   const onSearchHandler = (e) => {
       e.preventDefault();
       if(searchTerm === ''){
           alert('please enter something')
       }
       else{
           searchShows(searchTerm)
       }
   }
    return (
        <div className="container">
      <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
       
        </div>
        </div>
       
    )
}
