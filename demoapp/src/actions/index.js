import api from '../apis' ;
 import history from '../history' ;

// export const signUp = (formValues ,callback) => {
// console.log(formValues);
//      const response = api.post('/wp/v2/users/register', formValues );
//     response.then((res)=>{
//         console.log(res,'action then');
//         callback(res);
//     })
//     response.catch((error)=>{
//         console.log(error.response);
//     })         
// };
export const signUp =(formValues , callback) => { 
    const headers = {
    'Content-Type': 'application/json',
    }
    
      const response = api.post('/wp/v2/users/register',formValues,{headers:headers});
      console.log(formValues);
    
    response.then((res)=>{
      console.log(res,'action then');
      callback(res);
    }) 
      response.catch((error)=>{
      console.log(error.response,'action error');
    })
    return{
        type: 'signUp',
        payload: response
    };
    
    } 



export const logIn = (formValue ,callback) => {
   
     const response = api.post('/jwt-auth/v1/token', formValue);
    response.then((res)=>{
        
        callback(res);
    })
    response.catch((error)=>{
        callback(error.response); 
    })
     return{
        type: 'logIn',
        payload: response
    }; 
}


export const postList = (callback) => (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
    }
    const response = api.get('/wp/v2/posts',{ headers: headers } );
    response.then((res) => {
        callback(res.data);
        dispatch({
            type: 'FETCH_POST',
            payload: res.data
        });
    });
    response.catch((error) => {
        callback(error.response);
        console.log(error.response,'error');
    });

}

export const createPost = (formValues)  => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    console.log(localStorage.getItem("authToken"),'fdhfgdhgghfdgfdgfdgfdgfdhfg');
   const response = api.post('/wp/v2/posts',formValues,{ headers: headers });
 
    response.then((res) => {
        console.log(res, 'jklsdfhsdjfhsdjfh');
    });
    response.catch((error) => {
        console.log(error.response,'error');
    });
    return{
        type: 'createPost',
        payload: response
    };
}


export const editPost = (userid, formValues) => ()=> {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    console.log(localStorage.getItem("authToken"),'fdhfgdhgghfdgfdgfdgfdgfdhfg');
    const response = api.put(`/wp/v2/users`, userid ,formValues,{ headers: headers });
    response.then((res) => {
        console.log(res, 'jklsdfhsdjfhsdjfh');
    });
    response.catch((error) => {
        console.log(error.response,'error');
    });
    return{
        type: 'editPost',
        payload: response
    };
}

export const deletePost = (userid) => () => {
  var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    console.log(localStorage.getItem("authToken"),'fdhfgdhgghfdgfdgfdgfdgfdhfg');
    const response = api.delete(`/wp/v2/posts/${userid}`,{ headers: headers });
    response.then((res) => {

        history.push('/post');
        
    });
    response.catch((error) => {
        console.log(error.response,'error');
    });
    return{
        type: 'deletetPost',
        payload: response
    };
}

    
