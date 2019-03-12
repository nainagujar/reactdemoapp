import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
// import { Link } from 'react-router-dom' ;
import history from '../history' ;


class CreatePost extends React.Component {

  onSubmit = (values) => {
    this.props.createPost(values);
    console.log(values);
   // localStorage.setItem("authToken", res.data.token);
      history.push('/post');
  }

  renderField = ({input,meta}) => {
    //console.log(field)
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
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
          <button type='submit'>
            Submit
          </button>
          {/* <Link to='/post'>post</Link> */}
         </div>
      </form>
      </div>
    );
  }
}

let createpost = reduxForm({
    form: 'createpost' // a unique identifier for this form
})(CreatePost);

export default connect(null, { createPost })(createpost)
