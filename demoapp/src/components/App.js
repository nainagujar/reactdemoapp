import React from 'react' ;
import { Router  , Route } from 'react-router-dom' ;
import Home from './Home' ;
import LogIn from './LogIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import SelectArea from './SelectArea' ;
import history from '../history' ;
import NavBar from './NavBar' ;
import hostelDetails from './hostelDetails' ;
import dashboard from './dashboard' ;


class App extends React.Component{
 
     render() {
        return (
            <div>
            
         <Router history={history}>
       
         <div>
         <NavBar/>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/select' component={SelectArea}/>
          <Route path='/Details/:id' component={hostelDetails}/>
          <Route path='/dashboard' component={dashboard}/>
          </div>
         </Router>
         </div>
       );
    }
}
export default App ;