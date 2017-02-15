var React = require('react');
var ReactDOM = require('react-dom');
var ActorContainer = require('./containers/ActorContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <ActorContainer />,
    document.getElementById('app')
  );
}
