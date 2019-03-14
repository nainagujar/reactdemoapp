import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {toastr} from 'react-redux-toastr'
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router-dom' ;
import history from '../history' ;


class CreatePost extends React.Component {

  onSubmit = (values) => {
    toastr.success('post created!!')   
    this.props.createPost(values);
    console.log(values);
   // localStorage.setItem("authToken", res.data.token);
      history.push('/post');
  }

  renderField = ({input,meta}) => {
    return (
      <div>
        <input {...input}
          />
        <br />
        <font color='red'>{meta.touched ? meta.error : ''}</font>
      </div>
    )
  }
  render() {
    return (
      <div>
      <h1>Create Post</h1> 
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <div>
          <label>title</label>
          <div>
            <Field
              name="title"
              component={this.renderField}
    
              placeholder="title"
            />
          </div>
          <label>description</label>
          <div>
            <Field
              name="content"
              component={this.renderField}
              type="text"
              placeholder="description"
            />
          </div>
        </div>
        <label>status</label>
          <div>
            <Field
              name="status"
              component={this.renderField}
              type="text"
              placeholder="status"
            />
          </div>
        <div>
          <button className="ui primary button">
            Submit
          </button>
          <Link className ='ui primary button' to="/post" >
           cancle
          </Link> 
         </div>
      </form>
      </div>
    );
  }
}
const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = "you must enter title"
  }
   else if(values.title.length>10) {
    errors.title = "max length is 10"
   }
  if (!values.content) {
    errors.content = "content is required"
  }
  else if(values.content.length>30){
    errors.content= "max length is 30 character"
  }
  if (!values.status) {
    errors.status = "status is required"
  }
  else if(values.status.length>8){
    errors.status= "max length is 8 character"
  }
  return errors;
}

let createpost = reduxForm({
    form: 'createpost',
    validate // a unique identifier for this form
})(CreatePost);

export default connect(null, { createPost })(createpost)
