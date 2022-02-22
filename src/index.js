import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import GlobalFonts from './helpers/fonts/fonts'

ReactDOM.render(
	<React.StrictMode>
		<GlobalFonts />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

