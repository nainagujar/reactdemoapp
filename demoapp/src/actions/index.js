import hostels from '../apis/hostels' ;
//import Axios from 'axios';
import history from '../history';
 
export const logIn = (formvalue,callback) => {
   
    const response = hostels.get('http://localhost:3004/users',formvalue  );
    response.then((res)=>{
       let isloginSuccess = false 
       for (let index = 0; index < res.data.length; index++) {
           const element = res.data[index];
           if(element.username===formvalue.username && element.password ===formvalue.password)
          {
            isloginSuccess = true ;
            
            history.push('/select')
              
            }  else{
                 isloginSuccess = false
               }
          }
          if(isloginSuccess){
           callback(res);}
           else{
               callback({res : {status : 400}})
           }
        })
    response.catch((error)=> {
        callback(error.response);
   })
 return {
    type: 'LOG_IN',
    payload: response

};
}

export const signUp = (formvalue,callback) => {
    const response = hostels.post('http://localhost:3004/users',formvalue);

    response.then((res)=>{
        callback(res);
        history.push('/login')
        })
        response.catch((error)=> {
            callback(error.response);
       })
    return {
        type : 'SIGN_UP' ,
        payload : response
    };
};

export const hostelsList = (formvalue , callback) => {
    const response = hostels.get('http://localhost:3004/area',formvalue  );
    console.log(formvalue);
    
     response.catch((error)=> {
         callback(error.response);
    })
  return {
     type: 'FETCH_HOSTELS',
     payload: response
 
 };
 };
 
 export const selectedHostelsList = (id , callback) => {
    const response = hostels.get(`http://localhost:3004/hostels?areaname=${id}`);
    response.then((res)=>{
        callback(res);
        })
     response.catch((error)=> {
         callback(error.response);
    })
  return {
     type: 'FETCH_SELECTED_HOSTELS',
     payload: response
 
 };
 }

 export const viewDetails = (id) => {
     const response = hostels.get(`http://localhost:3004/hosteldetails?hostelId=${id}`);
    
     
     return {
        type: 'FETCH_HOSTELS_DETAILS',
        payload: response
    
    };
 }