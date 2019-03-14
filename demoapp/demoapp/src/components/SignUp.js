import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import {signUp} from '../actions' ;
import {toastr} from 'react-redux-toastr';
import history from '../history';
import _ from 'lodash'
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
     return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
          <h3>SignUp!!</h3>
          <div>
          <label>userName</label>
             <div>
             <Field
               name="username"
               component={this.renderField}
               type="text"
               placeholder="enter User Name"
              />
             </div>
          <label>email</label>
             <div>
             <Field
              name="email"
              component={this.renderField}
              type="email"
              placeholder="enter email"
              />
             </div>
          <label>password</label>
              <div>
              <Field
              name="password"
              component={this.renderField}
              type="password"
              placeholder="enter password"
              />
             </div>
             <label>first_Name</label>
            <div>
             <Field
               name="first_name"
               component={this.renderField}
               type="text"
               placeholder="enter first name"
              />
            </div>
          <label>lastName</label>
            <div>
             <Field
               name="last_name"
               component={this.renderField}
               type="text"
               placeholder="enter last name"
              />
             </div>
          <div>
           <button className="ui primary button">SignUp</button>
           <Link to="/login" className="item">
            back to login
           </Link>
          </div>
      </div>
      </form>
     );
    }
  }

const validate = (formValue) => {
  
  let errors= {} ;
  if(!formValue.userName){
    errors.userName = "username is required"
   }
   else if(formValue.userName.length<4){
    errors.userName= "length should atleast 4"
   }
   if(!formValue.email){
    errors.email = "email is required"
   }
  //  else if(formValue.email !==/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-z]/) {
  //   errors.email = 'Invalid email address'
  //   }
   if(!formValue.password){
    errors.password = "password is required"
   } 
   else if (formValue.password.length<4) {
     errors.password="enter atleast 4 character"
   }
  if(!formValue.first_name){
    errors.first_name = "firstname is required"
  }
  else if(formValue.first_name.length<3){
    errors.first_name= "length should atleast 3"
  }
  if(!formValue.last_name){
   errors.last_name = "last name is required"
  }
  else if(formValue.last_name.length<3){
   errors.last_name= "length should atleast 3"
  }    
   return errors ;
 }

 let signup = reduxForm({
  form: 'signUp',
  validate // a unique identifier for this form
})(SignUp);

export default connect (null,{signUp})(signup)

