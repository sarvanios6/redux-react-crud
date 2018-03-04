import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducer/reducer';

let middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
