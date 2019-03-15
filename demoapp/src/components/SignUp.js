import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import {signUp} from '../actions' ;
import {toastr} from 'react-redux-toastr';
import history from '../history';
import _ from 'lodash';

class SignUp extends React.Component {
 
  onSubmit = (formValue) => {

    console.log(formValue);
    let role = {
      role:"author"
    }
    formValue = _.assign(formValue,role)
   this.props.signUp(formValue,(res)=>{
   if(res.status === 200){
    toastr.success('successfully signed up!!') 
   history.push('/login'); 
 } else{
  toastr.error('signup failed!!');
 }
 console.log(res);
 }); 
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
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
          <h3>SignUp!!</h3>
          <div>
          <label>username</label>
             <div>
             <Field
               name="username"
               component={this.renderField}
               type="text"
               placeholder="Enter username"
              />
             </div>
          <label>email</label>
             <div>
             <Field
              name="email"
              component={this.renderField}
              type="email"
              placeholder="Enter email"
              />
             </div>
          <label>password</label>
              <div>
              <Field
              name="password"
              component={this.renderField}
              type="password"
              placeholder="Enter password"
              />
             </div>
             <label>firstName</label>
            <div>
             <Field
               name="first_name"
               component={this.renderField}
               type="text"
               placeholder="Enter firstname"
              />
            </div>
          <label>lastName</label>
            <div>
             <Field
               name="last_name"
               component={this.renderField}
               type="text"
               placeholder="Enter lastname"
              />
             </div>
          <div>
           <button className="ui primary button">SignUp</button>
           <Link to="/login" className="item">
            back to Login
           </Link>
          </div>
      </div>
      </form>
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
  if(!formValue.last_name){
   errors.last_name = "Lastname is required"
  }
  else if(formValue.last_name.length<3){
   errors.last_name= "Length should be atleast 3 character"
  }    
   return errors ;
 }

 let signup = reduxForm({
  form: 'signUp',
  validate // a unique identifier for this form
})(SignUp);

export default connect (null,{signUp})(signup)

