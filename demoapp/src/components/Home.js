import React from 'react' ;
//import { Link } from 'react-router-dom';
import SlideShow from './SlideShow' ;
import Footer from './Footer' ;
import './Bk.css'



class Home extends React.Component{
    render() {
        return (
        <div>
          <h1><font color={'black'}>Find Home, Away from Home...</font></h1>
          
          <SlideShow/>
          <br/>
          <Footer/>       
          <div className="container">
          </div>
        </div>

        );
    }
}
export default Home ;