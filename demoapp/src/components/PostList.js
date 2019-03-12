import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postList } from '../actions';
import history from '../history' ;


class PostList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        postdata : []
        }
        }
        componentWillMount = () => {
            console.log('willmount')
            this.props.postList((res) => { 
            console.log(res,'jhgdhklagkajh');    
            this.setState({postdata : res})
        })
     }

    // componentWillMount = () => {
    //     //console.log('sdgsfgfdgfdgdf');
    //     this.props.postList();
    // }

    onSubmit(){
        localStorage.removeItem("UserId");
       localStorage.removeItem("authToken");
       history.push('/login');
    }
    renderAdmin(post) {
        localStorage.getItem("data");
        //console.log(localStorage.getItem("userId") ,'renderadmin');
        //if ((post.author).toString() === localStorage.getItem('userid')) 
        if(localStorage.getItem("UserId").toString() === post.author.toString())
         {
            return (
                <div className='right floated content'>
                    <Link className='ui button primary' to={`/edit/${post.id}`}>EDIT</Link>
                    <Link className='ui button negative' to={`/delete/${post.id}`} >DELETE</Link>
                </div>
            );
        }
    }

    renderList=()=> {
        if(this.state.postdata!==[]){
            return this.state.postdata.map(post => {
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
                            {post.content.rendered}
                        </div>
                    </div>
                );
            });
        }
            
    }


    render() {
        if(localStorage.getItem("authToken"))
        return (
            <div>
                <h2>Post List</h2>
                <div className='ui secondary pointing menu'>
                <Link to='/new' className="ui button primary"> Create new Post</Link>
                    <Link to='/login' onClick={this.onSubmit}>Logout</Link>
              </div>
         <div className='ui celled list'>{this.renderList()}</div>
         </div>
    
        );
    }
}





export default connect(null, { postList })(PostList);