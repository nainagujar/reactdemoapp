import React from 'react' ;
import { Router  , Route } from 'react-router-dom' ;
import Home from './Home' ;
import LogIn from './LogIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import SelectArea from './SelectArea' ;
import history from '../history' ;
import NavBar from './NavBar' ;
import hostelList from './hostelList' ;


class App extends React.Component{
 
     render() {
        return (
            <div>
            
         <Router history={history}>
       
         <div>
         <NavBar/>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/select' component={SelectArea}/>
          <Route path='/list' component={hostelList}/>
          </div>
         </Router>
         </div>
       );
    }
}
export default App ;