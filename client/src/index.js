import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise';

const store = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
	<Provider store={store(reducers)}>
		<MuiThemeProvider>
		<App />
		</MuiThemeProvider>
	</Provider>,


	document.getElementById('root'));
registerServiceWorker();
