import { 
    STAFF_LIST_REQUEST,
    STAFF_LIST_SUCCESS,
    STAFF_LIST_FAIL
 } from '../constants/staffConstants'

 import axios from 'axios'

 export const listStaff = () => async (dispatch) => {
     try{
         dispatch({type: STAFF_LIST_REQUEST})

         const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/staff-list/`)

         dispatch({type:STAFF_LIST_SUCCESS, payload : data})

     }
     catch(error){
         dispatch({ type: STAFF_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message, })

     }
 }