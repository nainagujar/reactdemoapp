import axios from 'axios' ;

export default axios.create ({
    baseURL: 'http://10.10.10.224/restapi/wp-json',
    header:{
        "Content-Type":"app/json",
        "Authorization": `Bearer ${localStorage.getItem("authToken")}`
    }
});