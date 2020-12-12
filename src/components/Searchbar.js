

import React, {useContext, useState} from 'react'

//components
import Alert from './Alert'

//context
import ShowsContext from '../context/shows/showsContext'
import AlertContext from '../context/alerts/alertsContext'

export default function Searchbar(props) {

  const {alert, setAlert} = useContext(AlertContext)
   const showscontext = useContext(ShowsContext)
   const  {searchShows} = showscontext
   const [searchTerm, setSearchTerm] = useState('');
   
   const onSearchHandler = (e) => {
       e.preventDefault();
       if(searchTerm === ''){
           setAlert('please enter something', 'danger')
       }
       else{
           searchShows(searchTerm)
       }
   }
    return (
        <div className="container">
      <div className="searchbar">
      <form className="searchbar__form">
        {
          alert && <Alert message={alert.message} type={alert.type}/>
        }
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
