import { useReducer } from "react";
import axios from 'axios'
import ShowsContext from './showsContext';
import ShowsReducer from "./showsReducer";
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW,
  } from "../types";


  const ShowsState = props => { 



      const initaialstate= {
          shows: [],
          singleShows:{},
          loading:false
      }
  

  const [state, dispatch] = useReducer(ShowsReducer, initaialstate)


  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

//   const searchShows = (searchTerm) => {
//    dispatch({type:SET_LOADING});
//    axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`
//    )
//    .then(res =>
    
//     {
//         dispatch({type:SEARCH_SHOWS, payload:res})
//         console.log(res)
//     }
//     )
//     .catch(err => console.log(err))
// console.log(state.shows)

//   }


  const getSingleShow = (id) => {
    dispatch({type:SET_LOADING});

    axios.get(`https://api.tvmaze.com/shows/${id}`)
    .then(res=> {
        dispatch({type:SET_SINGLE_SHOW,
          payload:res
        })
        console.log(res)
    })
    .catch(err => console.log(err.response))

  }

  const clearSingleShow = () => {
      dispatch(
          {
            type: CLEAR_SINGLE_SHOW, 
          }
      )
  }


   return(
    <ShowsContext.Provider
    value={{
      shows: state.shows,
      singleShow: state.singleShow,
      loading: state.loading,
      searchShows,
      getSingleShow,
      clearSingleShow,
    }}
  >
    {props.children}
  </ShowsContext.Provider>
   )

}

export default ShowsState;
