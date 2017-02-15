import React from 'react';

import MovieContainer from '../containers/MovieContainer.jsx';

import {Link} from 'react-router';

class ActorSearch extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {container: <MovieContainer type='actor' target='Al Pacino'/>}
    }

    render () {

        return (<div>

            {this.state.container}

        </div>)
    }

}

export default ActorSearch;