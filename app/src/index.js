import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import './index.css';
import commentsReducer from './commentsReducer.js';
import fieldsContentReducer from './fieldsContentReducer.js';
import {addComment} from './actions.js';

const reducer = combineReducers({
    comments: commentsReducer,
    fieldsContent: fieldsContentReducer
});

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));