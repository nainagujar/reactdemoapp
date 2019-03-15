import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import { postList } from '../actions';
import history from '../history';
import DeletePost from './DeletePost';



class PostList extends React.Component {
    state = { flag: false,popupState:false,postid:'' }

    removeHTMLTag(str) {
        return str.replace(/<[/]?\w+>/g, "");
    }

    componentWillMount() {
        this.setState({ flag: false });
        this.props.postList((res) => {

            if (res.status === 200) {

                this.setState({ flag: true })
            }

        });
    }

    onSubmit() {
        localStorage.removeItem("UserId");
        localStorage.removeItem("authToken");
        toastr.success('successfully logged out!!');
        history.push('/login');
    }

    renderpopup=(id)=>{
        this.setState({popupState:true,postid:id})
    }

    renderAdmin(post) {
        localStorage.getItem("data");

        if (localStorage.getItem("UserId").toString() === post.author.toString()) {
            return (
                <div className='right floated content'>
                    <Link className='ui button primary' to={`/edit/${post.id}`}>EDIT</Link>
                    <button className='ui button negative' onClick={()=>this.renderpopup(post.id)} >DELETE</button>
                </div>
            );
        }
    }
    renderAlert() {
        alert('you have to login first');
        history.push('/login');

    }

    renderList = () => {

        if (this.state.flag) {
            return this.props.posts.map(post => {
                return (
                    <div className="item" key={post.id}>
                        {this.renderAdmin(post)}
                        <i className="large middle aligned icon user" />
                        <div className="title">
                            <Link to={`/post${post.id}`} className="header">
                                {post.title.rendered}
                            </Link>
                        </div>
                        <div className="content">
                            {this.removeHTMLTag(post.content.rendered)}
                        </div>
                    </div>
                );
            });

        }

    }

    cancelPopup=()=>{
        this.setState({popupState:false});
    }


    render() {

        if (localStorage.getItem("authToken")) {
            return (
                <div>
                    {this.state.popupState && <DeletePost
                        popupState={this.state.popupState}
                        cancelPopup={this.cancelPopup}
                        postid={this.state.postid}
                    />}
                    <h2>Post List</h2>
                    <div className='ui secondary pointing menu'>
                        <Link to='/new' className="ui button primary"> Create new Post</Link>
                        <Link to='/login' onClick={this.onSubmit}>Logout</Link>
                    </div>

                    <div className='ui celled list'>{this.renderList()}</div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.renderAlert()}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postList
    }
}

export default connect(mapStateToProps, { postList })(PostList);