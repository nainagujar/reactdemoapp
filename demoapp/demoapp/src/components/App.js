import React from 'react';
import { Route , Router } from 'react-router-dom' ;
import SignUp from './SignUp';
import LogIn from './LogIn' ;
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import EditPost from './EditPost';
import PostList from './PostList';
import UpdateProfile from './UpdateProfile';
import ViewPost from './ViewPost';
import Header from './Header' ;
import history from '../history' ;




const App = () => {
      return (
        <div>
          <Router history={history}>
            <div>
              <Header />
              <Route path="/" exact component={SignUp} />
             <Route path="/login" exact component={LogIn} />
             <Route path="/update" exact component={UpdateProfile} />
             <Route path="/post" exact component={PostList} />
             <Route path="/new" exact component={CreatePost} />
             <Route path="/edit/:id" exact  component={EditPost} />
             <Route path="/delete/:id" exact component={DeletePost} />
             <Route path="/view" exact component={ViewPost} />
            </div>
          </Router>
        </div>
        );
    }

export default App;