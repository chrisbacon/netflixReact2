var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

var MovieContainer = React.createClass({

    getInitialState: function () {
        return {movies: [], focusMovie: null}
    },

    componentDidMount: function() {
        this.setState({target: this.props.target, type: this.props.type}, this.getMovies)
    },

    getMovies: function () {
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
    },

    setFocusMovie: function(movie) {
        this.setState({focusMovie: movie});
    },

    changeActor: function(actor) {
        this.setState({target: actor, type: "actor"}, this.getMovies);
        
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('received props! changing state...getting new movies')
        this.setState({target: nextProps.target, type: nextProps.type}, this.getMovies)
    },

    render: function () {
        return (
            <div>
                <h2>{this.state.target} Movies on Netflix</h2>
                <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie}/>
                <MovieDetail movie={this.state.focusMovie} changeActor={this.changeActor}/>
            </div>
            )
    }

});


module.exports = MovieContainer;