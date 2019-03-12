import React from 'react';
import { connect } from 'react-redux' ;
import { createPost , editPost } from '../actions' ;
//import { Link } from 'react-router-dom' ;
import CreatePost from './CreatePost' ;
import history from '../history' ;

class EditPost extends React.Component {


    onSubmit = (formValue) => {
    this.props.createPost(this.props.match.params.id,formValue) 
    history.push('/post');
    };
    
    render() {
    
    return(
    <div>
    <h3>Edit a Post</h3>
    <CreatePost 
    onSubmit={this.onSubmit}
    /> 
    </div>
    ); 
    }
    }
    
     export default connect(null , {createPost ,editPost })(EditPost);
































// class EditPost extends React.Component {
//     componentDidMount() {
//         this.props.editPost(this.props.match.params.id);
//     }

//      onSubmit = (userid , formValue) => {
//          console.log(userid,formValue);
//      };

//     render() {
//        if(!this.props.post){
//            return <div>Loading...</div>;
//        }
//     return (
//        <div>
//          <h3>Edit a Post</h3>
        
//         initialValues={_.pick(this.props.post, 'title', 'description')}
//        onSubmit={this.onSubmit}
//        </div>
//     );
//     }
// }

// const mapStateToProps = (state , ownProps) => {
//     return { post: state.posts[ownProps.match.params.id] };
// };

// export default connect(
//     mapStateToProps,
//     {  editPost }
//     )(EditPost);