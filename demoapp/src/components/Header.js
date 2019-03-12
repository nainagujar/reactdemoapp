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
    
            <Link to="/login" className="item">
              login
              </Link>
              <div>
              <Link to="/" className="item">
               signup
              </Link>
              </div>
             </div>
        );
    }
};

export default Header ;

