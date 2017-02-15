var React = require('react');

var MovieSelector = React.createClass({
    getInitialState: function(){
        return{selectedIndex: undefined}
    },
    handleChange: function(event){
        var newIndex = event.target.value;
        this.setState({selectedIndex: newIndex});
        this.props.selectMovie(this.props.movies[newIndex]);
    },

    render: function(){
       var options = this.props.movies.map(function(movie,index){
        return <option value={index} key={index}>
        {movie.show_title}
        </option>
    })
       return (
        <select id="movies" value={this.state.selectedIndex} onChange={this.handleChange}>
        {options}
        </select>
        );
   }

});

module.exports = MovieSelector;