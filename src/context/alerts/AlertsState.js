import {useReducer} from 'react'
import reducer from './alertsReducers'
import AlertContext from './alertsContext'
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertsState = (props) => {

    const initialState = null

const [ state, dispatch] = useReducer(reducer, initialState)


function setAlert (message, type) {
 dispatch({type:SET_ALERT,payload:{
     message,
     type
 } });
console.log('alert')
 setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
}

return(
<AlertContext.Provider value={{
    alert:state,
    setAlert
}}>

{props.children}
</AlertContext.Provider>
)


}


export default AlertsState