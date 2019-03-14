import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {toastr} from 'react-redux-toastr';
import { connect } from 'react-redux' ;
 import { Link } from 'react-router-dom' ;
import {logIn} from '../actions' ;
import history from '../history';



class LogIn extends React.Component {

  onSubmit = (formValue) => {
    this.props.logIn(formValue,(res)=>{
      
        if(res.status===200)
        {
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("UserId", res.data.user_id);
          localStorage.setItem("userName", res.data.user_display_name); 
          toastr.success('successfully logged in!!')        
          history.push('/post');
        }
        else{
          toastr.error('invalid');
        }
        
         
        
        
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
      <div>
        <h2>Login Here</h2>
         <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <label>username</label>
          <div>
            <Field
              name="username"
              component={this.renderField}
              type="text"
              placeholder="username"
            />
          </div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component={this.renderField}
              type="password"
              placeholder="password"
            />
          </div>
          <div>
          <button className ='ui primary button' >
           Submit
          </button> 
           <Link className ='ui primary button' to="/" >
           SignUp
          </Link> 
          </div>
      </form>
     </div>
      );
   }
}

const validate = (formValue) => {
  let errors = {};
  if (!formValue.username) {
    errors.username = "username is required"
  }
   else if(formValue.username.length<4) {
    errors.username = "username must be 4 character"
   }
  if (!formValue.password) {
    errors.password = "password is required"
  }
  else if(formValue.password.length<4){
    errors.password= "enter atleast 4 character"
  }
 
  return errors;
}

let login = reduxForm({
  form: 'LogIn',
  validate // a unique identifier for this form
})(LogIn);

export default connect (null,{logIn})(login)


