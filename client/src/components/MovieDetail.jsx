var React = require('react');

var MovieDetail = React.createClass({

    handleClick: function(event){
        console.log("handle click called")
        this.props.changeActor(event.target.innerText);
    },

    render: function() {

        if (!this.props.movie){
            return <h4>No movie selected</h4>
        }

        var cast = this.props.movie.show_cast.split(',');
        var lis = cast.map(function(actor, index) {
            return <li key={index}>{actor}</li>
        }.bind(this))

        return (<div>
            <img src={this.props.movie.poster}/>
            <h3> {this.props.movie.show_title}</h3>
            <h5>Director</h5>
            <p>{this.props.movie.director}</p>
            <h5>Cast</h5>
            <ul onClick={this.handleClick}>
                {lis}
            </ul>
            <h5>Summary</h5>
            <p>
                {this.props.movie.summary}
            </p>
            </div>)
    }
});

module.exports = MovieDetail;