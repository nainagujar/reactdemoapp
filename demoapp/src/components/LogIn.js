import React from 'react' ;
import { Link }  from 'react-router-dom';
import { reduxForm , Field } from 'redux-form' ;
import { connect } from 'react-redux' ;
import history from '../history';
import {logIn} from '../actions' ;
import {toastr} from 'react-redux-toastr';
//import Bk from './Bk' ;
//import Img from 'react-image' ;
//import BackgroundImage from "react-background-image";


class LogIn extends React.Component{

  onSubmit = (formvalue) => {
   
  
     this.props.logIn(formvalue);
     toastr.success('successfully logged in!!');    
     history.push('/select');
     }

    renderField = (field) => {
        return (
          <div>
            <input type={field.type}
              {...field.input}
              className={field.className}
              placeholder={field.placeholder} />
            <br />
            <font color='red'>{field.meta.touched ? field.meta.error : ''}</font>
          </div>
        )
      }
      render() {
        if(!localStorage.getItem("authToken"))
        {
       return (
         
         <div>
           
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form' >
            <h4>LOGIN</h4>
            
             <label>Username</label>
             <div>
               <Field
                 name="username"
                 component={this.renderField}
                 type="text"
                 placeholder="Enter username"
               />
             </div>
             <label>Password</label>
             <div>
               <Field
                 name="password"
                 component={this.renderField}
                 type="password"
                 placeholder="Enter password"
               />
             </div>
             <div>
            <button className ='ui primary button'>LOG IN </button>
              <Link className ='ui primary button' to="/signup" >
              SignUp
             </Link> 
             </div>
             {/* <Bk/> */}
            
         </form>
        
        </div>
         );
       }
       
       else{
         return (
         <div> 
         {alert('Invalid action performed')}
          {history.push('/post')}
         </div>
         );
        } 
      }
   }
    
    const validate = (formValue) => {
      let errors = {};
      if (!formValue.username) {
        errors.username = "Username is required"
      }
       else if(formValue.username.length<3) {
        errors.username = "Username must be atleast 3 character"
       }
       else if (/^[0-9_)(%+-@.~`+-=*&]/i.test(formValue.username)) {
        errors.username = 'Enter Valid Username'
      }
      if (!formValue.password) {
        errors.password = "Password is required"
      }
      else if(formValue.password.length<4){
        errors.password= "Password must be atleast 4 character"
      }
      else if (!/[^a-zA-Z0-9 ]/i.test(formValue.password)) {
        errors.password = 'Only Alfanumeric value will be accepted'
      }
     
      return errors;
    }
    
    let login = reduxForm({
      form: 'LogIn',
      validate // a unique identifier for this form
    })(LogIn);
    
    export default connect (null,{logIn})(login)