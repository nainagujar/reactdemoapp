import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { Provider } from 'react-redux' ;
import ReduxToastr from 'react-redux-toastr' ;
import { createStore, applyMiddleware, compose } from 'redux' ; 
import reduxThunk from 'redux-thunk';
import App from './components/App' ;
import reducers from './reducers' ;
import promiseMiddleware from 'redux-promise';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhansers(applyMiddleware(promiseMiddleware,reduxThunk))
    );

ReactDOM.render (
    <Provider store={store}>
    <div>
     <ReduxToastr
       timeOut={4000}
       newestOnTop={false}
       preventDuplicates
       position="top-left"
       transitionIn="fadeIn"
       transitionOut="fadeOut"
       progressBar
       closeOnToastrClick
       />
       </div>
     <App/>
    </Provider>,
    document.querySelector('#root')
);