import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from './components/App' ;
import { Provider } from 'react-redux' ;
import { createStore, applyMiddleware, compose } from 'redux' ; 
import reduxThunk from 'redux-thunk';


import reducer from './reducer' ;
import promiseMiddleware from 'redux-promise';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhansers(applyMiddleware(promiseMiddleware,reduxThunk))
    );
ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,   
    document.querySelector('#root')
);