import React from 'react';

import MovieContainer from '../containers/MovieContainer.jsx';
import Search from '../components/search.jsx';

import {Link} from 'react-router';

class DirectorSearch extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {target: 'Stanley Kubrick'}
    }

    changeTarget(target) {
        this.setState({target: target});
    }

    render () {
        return (<div>

            <Search changeTarget = {this.changeTarget.bind(this)} type='director' />

            <MovieContainer type='director' target={this.state.target}/>

        </div>)
    }

}

export default DirectorSearch;