import hostels from '../apis/hostels' ;

import history from '../history';
 
export const  logIn = (formvalue) => {
    return {
        type : 'LOG_IN',
        payload : formvalue
    };
};

export const signUp = (formvalue) => {
    return {
        type : 'SIGN_UP' ,
        payload : formvalue
    };
};


