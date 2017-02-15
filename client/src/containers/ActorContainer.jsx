var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

var ActorContainer = React.createClass({

    getInitialState: function () {
        return {movies: [], focusMovie: null, actor: "Al Pacino"}
    },

    componentDidMount: function() {
        this.getActorMovies()
    },

    getActorMovies: function () {
        var url = "http://netflixroulette.net/api/api.php?actor=" + this.state.actor
        console.log('url set to:', url)
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                this.setState({movies: data, focusMovie: data[0]});

                
                console.log('Movies are:', this.state.movies)
            }
        }.bind(this)
        request.send(null);
    },

    setFocusMovie: function(movie) {
        this.setState({focusMovie: movie});
    },

    changeActor: function(actor) {
        this.setState({actor: actor}, this.getActorMovies);
        
    },

    render: function () {
        console.log('rendering...')
        return (
            <div>
                <h2>{this.state.actor} Movies on Netflix</h2>
                <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie}/>
                <MovieDetail movie={this.state.focusMovie} changeActor={this.changeActor}/>
            </div>
            )
    }

});


module.exports = ActorContainer;