import React from 'react';

import MovieContainer from '../containers/MovieContainer.jsx';
import SearchBar from '../components/SearchBar.jsx';

import {Link} from 'react-router';

class Search extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {target: ''}
    }

    changeTarget(target) {
        this.setState({target: target});
    }

    render () {
        console.log('Search rendering...type is: ', this.props.route.type)
        return (<div>

            <SearchBar changeTarget = {this.changeTarget.bind(this)} type={this.props.route.type}/>

            <MovieContainer type={this.props.route.type} target={this.state.target}/>

        </div>)
    }

}

export default Search;