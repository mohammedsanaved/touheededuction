import { 
    STAFF_LIST_REQUEST,
    STAFF_LIST_SUCCESS,
    STAFF_LIST_FAIL
 } from '../constants/staffConstants'


 export const staffListReducer = (state={staff:[]}, action ) =>{
     switch(action.type){

        case STAFF_LIST_REQUEST:
             return {loadin : true, staff : []}
        case STAFF_LIST_SUCCESS:
            return {loading : false, staff : action.payload }
        case STAFF_LIST_FAIL:
            return {loading : false, error : action.payload }
        default:
            return state

     }
 }