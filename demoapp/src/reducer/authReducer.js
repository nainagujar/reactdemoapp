//import _ from 'lodash';

export default (state ={} ,action) =>{
    switch(action.type){
        case 'FETCH_HOSTELS':
        // console.log(action.payload , "action")
            return {...state , ...action.payload}
         case 'FETCH_HOSTELS_DETAILS' :
       
           return {...state , ...action.payload}
            default:
            return state;
        }
    };