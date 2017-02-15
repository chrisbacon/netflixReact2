import React from 'react';

import MovieContainer from '../containers/MovieContainer.jsx';
import Search from '../components/search.jsx';

import {Link} from 'react-router';

class DirectorSearch extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {type: 'director', target: 'Stanley Kubrick'}
    }

    changeTarget(target) {
        this.setState({target: target});
    }

    render () {
        return (<div>

            <Search changeTarget = {this.changeTarget.bind(this)} />

            <MovieContainer type={this.state.type} target={this.state.target}/>

        </div>)
    }

}

export default DirectorSearch;