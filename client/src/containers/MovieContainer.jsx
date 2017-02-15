import React from 'react';
import MovieSelector from '../components/MovieSelector';
import MovieDetail from '../components/MovieDetail';

class MovieContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {movies: [], focusMovie: null}
    }

    componentDidMount() {
        this.setState({target: this.props.target, type: this.props.type}, this.getMovies)
    }

    componentWillReceiveProps(nextProps) {
        console.log('received props! changing state...getting new movies')
        this.setState({target: nextProps.target, type: nextProps.type}, this.getMovies)
    }

    getMovies() {
        var url = "http://netflixroulette.net/api/api.php?" + this.state.type + "=" + this.state.target;
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                this.setState({movies: data, focusMovie: data[0]});
            }
        }.bind(this)
        request.send(null);
    }

    setFocusMovie(movie) {
        this.setState({focusMovie: movie});
    }

    changeActor(actor) {
        this.setState({target: actor, type: "actor"}, this.getMovies);    
    }

    changeDirector(director) {
        this.setState({target: director, type: "director"}, this.getMovies)
    }

    render() {
        return (
            <div>
                <h2>{this.state.target} Movies on Netflix</h2>
                <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie.bind(this)}/>
                <MovieDetail movie={this.state.focusMovie} changeActor={this.changeActor.bind(this)}/>
            </div>
            )
    }

}


export default MovieContainer;