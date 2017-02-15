import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';

import MovieContainer from './containers/MovieContainer.jsx';
import Search from './containers/Search.jsx';


window.onload = function(){
  ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={MovieContainer} type='actor' target='Al Pacino' />
            <Route path='director' component={Search} type='director' />
            <Route path='actor' component={Search} type='actor' />
        </Route>
    </Router>,
    document.getElementById('app')
  );
}
