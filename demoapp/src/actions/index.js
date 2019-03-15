import api from '../apis';
import history from '../history' ;

export const signUp = (formValues, callback) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const response = api.post('/wp/v2/users/register', formValues, { headers: headers })

    response.then((res) => {

        callback(res);
    })
    response.catch((error) => {

    })
    return {
        type: 'signUp',
        payload: response
    };

}



export const logIn = (formValue, callback) => {
    const response = api.post('/jwt-auth/v1/token', formValue);
    response.then((res) => {
        callback(res);

    })
    response.catch((error) => {
        callback(error.response);
    })
    return {
        type: 'logIn',
        payload: response

    };
}

export const fetchPost = (id) => (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
    }
    const response = api.get(`/wp/v2/posts/${id}`, { headers: headers });
    response.then((res) => {
        dispatch({
            type: 'EDIT_POST',
            payload: res.data
        });
    });
    response.catch((error) => {

    });

}


export const postList = (callback) => (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
    }
    const response = api.get('/wp/v2/posts', { headers: headers });
    response.then((res) => {
        callback(res)
        dispatch({
            type: 'FETCH_POST',
            payload: res.data
        });
    });
    response.catch((error) => {

    });

}

export const createPost = (formValues, callback) => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    const response = api.post('/wp/v2/posts', formValues, { headers: headers });

    response.then((res) => {
        callback(res);
    });
    response.catch((error) => {
        callback(error.response)
    });
    return {
        type: 'createPost',
        payload: response
    };
}


export const editPost = (postid, formValues) => () => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    
    const response = api.put(`/wp/v2/posts/${postid}`,formValues, { headers: headers });
    response.then((res) => {
       
        history.push('/post');
    });
    response.catch((error) => {
       
    });
}


export const deletePost = (id,callback) => (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }

    const response = api.delete(`/wp/v2/posts/${id}`, { headers: headers });
    response.then((res) => {

        callback(res);

    });
    response.catch((error) => {
       callback(error.response);
    });
    
    
}


