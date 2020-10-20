import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import MainPage from './MainPage';
import theme from './muiTheme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme()}>
			<CssBaseline />
			<MainPage />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
