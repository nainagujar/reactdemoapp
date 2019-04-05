import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom' ;
import { connect } from 'react-redux';
import history from '../history';
import { signUp } from '../actions'


class SignUp extends React.Component {
 
  onSubmit = (formvalue) => {
    this.props.signUp(formvalue);
     history.push('/select')
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
         <h4>SIGNUP</h4>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
             <label>FirstName</label>
            <div>
             <Field
               name="first_name"
               component={this.renderField}
               type="text"
               placeholder="Enter firstname"
              />
            </div>
          <label>LastName</label>
            <div>
             <Field
               name="last_name"
               component={this.renderField}
               type="text"
               placeholder="Enter lastname"
              />
             </div>
             <label>Username</label>
             <div>
             <Field
               name="username"
               component={this.renderField}
               type="text"
               placeholder="Enter username"
              />
             </div>
          <label>Email</label>
             <div>
             <Field
              name="email"
              component={this.renderField}
              type="email"
              placeholder="Enter email"
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
            <button className="ui primary button">SIGN UP</button>
            <Link to="/login" className="item">
            <font color={'blue'}> Back to Login</font>
            </Link>
          </div>
      </form>
      </div>
     );
  }
  else {
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
  
  let errors= {} ;
  if(!formValue.username){
    errors.username = "Username is required"
   }
   else if(formValue.username.length<4){
    errors.username= "Length should be atleast 4 character"
   }
   else if (/^[0-9_%+-@.~`+-=*&]+/i.test(formValue.username)) {
    errors.username = 'Enter Valid Username'
  }
   if(!formValue.email){
    errors.email = "Email is required"
   }
   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValue.email)) {
    errors.email = 'Enter Valid Email'
  }
   
   if(!formValue.password){
    errors.password = "Password is required"
   } 
   else if (formValue.password.length<4) {
     errors.password="Length should be atleast 4 character"
   }
   else if (!/[^a-zA-Z0-9 ]/i.test(formValue.password)) {
    errors.password = 'Only Alfanumeric value will be accepted'
  }
  if(!formValue.first_name){
    errors.first_name = "Firstname is required"
  }
  else if(formValue.first_name.length<3){
    errors.first_name= "Length should be atleast 3 character"
  }
  else if (/^[0-9_%+-@.~`+-=*&]/i.test(formValue.first_name)) {
    errors.first_name = 'Enter Valid firstname'
  }
  if(!formValue.last_name){
   errors.last_name = "Lastname is required"
  }
  else if(formValue.last_name.length<3){
   errors.last_name= "Length should be atleast 3 character"
  } 
  else if (/^[0-9_%+-@.~`+-=*&]/i.test(formValue.last_name)) {
    errors.last_name = 'Enter Valid lastname'
  }   
   return errors ;
 }

 let signup = reduxForm({
  form: 'signUp',
  validate // a unique identifier for this form
})(SignUp);

export default connect (null,{signUp})(signup)
