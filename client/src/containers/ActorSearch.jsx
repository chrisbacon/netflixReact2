import React from 'react';

import MovieContainer from '../containers/MovieContainer.jsx';
import Search from '../components/search.jsx';

import {Link} from 'react-router';

class ActorSearch extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {target: 'Al Pacino'}
    }

    changeTarget(target) {
        this.setState({target: target});
    }

    render () {
        return (<div>

            <Search changeTarget = {this.changeTarget.bind(this)} type='actor'/>

            <MovieContainer type='actor' target={this.state.target}/>

        </div>)
    }

}

export default ActorSearch;