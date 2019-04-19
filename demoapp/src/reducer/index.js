import { combineReducers } from 'redux' ;
//import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as forms} from 'redux-form';
import authReducer from './authReducer' ;


//  export default (state ={} ,action) =>{
//   switch(action.type){
//     case' FETCH_HOSTELS':
//         return {...state ,..._.mapKeys(action.payload  ,'id')}
//     // case 'FETCH_STREAM':
//     //     return {...state , [action.payload.id]: action.payload};
//         default:
//         return state;
//     }
//   };
  
export default combineReducers({
  form:forms,
  auth : authReducer,
  fetchHostels:authReducer
 
 });


//  const postListReducer = (state =[] , action) =>{
//   switch (action.type) {
//       case 'FETCH_POST':
//        return action.payload;

//     default:
//  return  state ;

// }