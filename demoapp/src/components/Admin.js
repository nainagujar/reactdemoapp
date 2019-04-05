import React from 'react' ;
import { Link }  from 'react-router-dom';
import { reduxForm , Field } from 'redux-form' ;
import { connect } from 'react-redux' ;
import history from '../history';
//import Bk from './Bk' ;

class LogIn extends React.Component{

    onSubmit = (formValue) => {
    console.log(formValue);
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
             <h3>Admin login</h3>
             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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
                <br/>
              <button className ='ui primary button' >
               LOG IN
              </button> 
               <Link to="/"> <font color={'blue'}> Back to Home</font></Link> 
              </div>
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
       else if (/^[0-9_%+-@.~`+-=*&]/i.test(formValue.username)) {
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
    
    let admin = reduxForm({
      form: 'Admin',
      validate // a unique identifier for this form
    })(LogIn);
    
    export default connect (null)(admin)