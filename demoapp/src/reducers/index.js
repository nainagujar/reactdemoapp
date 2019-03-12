import { combineReducers } from 'redux' ;

import { reducer as forms} from 'redux-form';

const postListReducer = (postList=[], action) =>{
    switch (action.type) {
        case 'FETCH_POST':
      return action.payload;

      default:
   return  postList;

}
}
export default combineReducers({
  postList : postListReducer,  
  form:forms
});