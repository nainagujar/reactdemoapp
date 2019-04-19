import React from 'react' ;
import { Link } from 'react-router-dom' ;
import './NavBar.css' ;
// import {NavLink} from 'react-router-dom' ;

 


const NavBar = () => {
   
        return (
            <div>

               
                 <div className= "ui secondary pointing menu" style={{
                         fontSize: '15px',
                         textAlign: 'center',
                         backgroundColor: 'pink',
                         padding: '2px',
                         height: '10px' }} >
                          <h3 style={{textAlign: 'center' , color:''}}>Indore Hostel Online Services</h3> 
                          
                         <Link to="/" className="right floating content menu">
                      <h3><font color={''}>Home</font></h3>
                     </Link>
                     <Link to="/signup" className="right floating content menu"> <h3> <font color={''}>SignUp</font></h3> </Link>
                    <Link to="/login" className="right floating content menu"> <h3> <font color={''}>LogIn</font></h3></Link>
                    <Link to="/about" className="right floating content menu">  <h3><font color={''}>About Us</font></h3> </Link>
                    

                    
                 </div>   
            </div>
              
        );
    }
 

export default NavBar ;

