import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';

import MovieContainer from './containers/MovieContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={MovieContainer} />
        </Route>
    </Router>,
    document.getElementById('app')
  );
}
