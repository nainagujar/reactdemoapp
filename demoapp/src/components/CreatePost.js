import React from 'react';
import { reduxForm } from 'redux-form';
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux';
import { createPost } from '../actions';
import history from '../history';
import PostForm from './PostForm'


class CreatePost extends React.Component {

  onSubmit = (values) => {
    this.props.createPost(values, (res) => {
      if (res.status === 201) {
        toastr.success('post created!!');
        history.push('/post');
      }
      else{
        toastr.error('post creation failed!!');
       }
    })
  }

  render() {
    if (localStorage.getItem("authToken")) {
      return (
        <div>
          <h1>Create Post</h1>
          <PostForm onSubmit={this.onSubmit} />
        </div>
      );
    }
    else {
      return (
        <div>
          {alert('you have to login first')}
          {history.push('/login')}

        </div>
      );

    }
  }
}
const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = "Title is required"
  }
  else if (values.title.length > 15) {
    errors.title = "Max length is 15"
  }
  if (!values.content) {
    errors.content = "Content is required"
  }
  else if (values.content.length > 40) {
    errors.content = "Max length is 40 character"
  }
  if (!values.status) {
    errors.status = "Status is required"
  }
  else if (values.status.length > 8) {
    errors.status = "Max length is 8 character"
  }
  return errors;
}

let createpost = reduxForm({
  form: 'createpost',
  validate // a unique identifier for this form
})(CreatePost);

export default connect(null, { createPost })(createpost)
