import React from 'react' ;
import { Link } from 'react-router-dom' ;

const Header = () => {
    if(localStorage.getItem.authToken){
        return (
            <div className= "ui secondary pointing menu">
    
            <Link to="/" className="item">
              logout
              </Link>
             </div>
        );
    }
    else{
        return (
            <div className= "right menu">
            <center> <h2>Demo-app</h2> </center>
             </div>  
        );
    }
};

export default Header ;

