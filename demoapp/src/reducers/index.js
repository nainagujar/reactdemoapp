import { combineReducers } from 'redux' ;
import {reducer as toastrReducer} from 'react-redux-toastr'
// import _ from 'lodash' ;

import { reducer as forms} from 'redux-form';

const postListReducer = (state =[] , action) =>{
    switch (action.type) {
        case 'FETCH_POST':
         return action.payload;

      default:
   return  state ;

}
}
const singlePostReducer = (state =[] , action) =>{
  switch (action.type) {

      case 'EDIT_POST' :
      return action.payload;

    //  case 'DELETE_POST' :
    //  return  _.omit(state, action.payload); 

    default:
 return  state ;

}
}

export default combineReducers({
  postList : postListReducer,  
  selectedPost:singlePostReducer,
  form:forms,
  toastr: toastrReducer 
});