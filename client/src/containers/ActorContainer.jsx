var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

var ActorContainer = React.createClass({

    getInitialState: function () {
        return {movies: [], focusMovie: null}
    },

    componentDidMount: function () {
        var url = "http://netflixroulette.net/api/api.php?actor=Al%20Pacino"
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

    render: function () {
        return (
            <div>
                <h2>Actor Container</h2>
                <MovieSelector movies={this.state.movies} selectMovie={this.setFocusMovie}/>
                <MovieDetail movie={this.state.focusMovie}/>
            </div>
            )
    }

});


module.exports = ActorContainer;