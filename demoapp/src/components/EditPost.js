import React from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPost } from '../actions';
import PostForm from './PostForm';
import _ from 'lodash' ;

class EditPost extends React.Component {

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);

  }

  onSubmit=(formvalues)=>{
    this.props.editPost(this.props.match.params.id,formvalues);
  }

  // onSubmit = formValues => {
  //   this.props.editPost(this.props.match.params.id,formValues);
  // }
  renderPost() {
    if (localStorage.getItem("authToken")) {
      if (this.props.post.title) {
        const { post } = this.props;
        const initialvalue = {
          'title': post.title.rendered,
          'content': post.content.rendered,
          'status': post.status
        }
        return (
          <div>
            <h3>Edit Post</h3>
            <PostForm initialValues={_.pick(initialvalue, 'title', 'content', 'status')} onSubmit={this.onSubmit} />
          </div >
        );


      }
    } 
  }  

      render() {
        return (
          <div>
            {this.renderPost()}
          </div>
        );
      }
    }

    const mapStateToProps = (state) => {
      return { post: state.selectedPost };
    };

    export default connect(
      mapStateToProps,
      { editPost, fetchPost }
    )(EditPost);