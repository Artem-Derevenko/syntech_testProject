import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
    BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import projectStore from './store.js';
import About from './containers/About/About.jsx';
import News from './containers/News/News.jsx';
import Home from './containers/Home/Home.jsx';
import Page404 from './containers/Page404/Page404.jsx';
import Header from './containers/Header/Header.jsx';
import './main.scss';

ReactDOM.render((
	<MuiThemeProvider>
		<Provider store={projectStore}>
			<Router>
				<div className="page-wrap">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/news" component={News} />
						<Route path="*" component={Page404} />
					</Switch>
				</div>
			</Router>
		</Provider>
	</MuiThemeProvider>),
	document.getElementById('app')
);