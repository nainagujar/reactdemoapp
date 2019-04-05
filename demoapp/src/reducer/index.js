import { combineReducers } from 'redux' ;
import {reducer as toastrReducer} from 'react-redux-toastr'

import { reducer as forms} from 'redux-form';

const hostelListReducer = (state =[] , action) =>{
  switch (action.type) {
      case 'FETCH_POST':
       return action.payload;

    default:
 return  state ;
  }
}
export default combineReducers({
  form:forms,
  hostel: hostelListReducer,
  toastr: toastrReducer 
});