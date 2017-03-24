import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import DevTools from './DevTools.js';
import App from './App';
import './index.css';
import commentsReducer from './commentsReducer.js';
import {addComment} from './actions.js';

const reducer = combineReducers({
    comments: commentsReducer
});

const logger = createLogger();

const store = createStore(reducer, compose(
    applyMiddleware(logger),
    DevTools.instrument()
 ));

ReactDOM.render(
    <Provider store={store}>
	    <div>
	        <App />
	        <DevTools />
	    </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));