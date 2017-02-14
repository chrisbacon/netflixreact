var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

ActorContainer = React.createClass({

    getInitialState: function () {
        return {movies: [], focusMovie: null}
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <div>
                <h2>Actor Container</h2>
                <MovieSelector/>
                <MovieDetail/>
            </div>
            )
    }

});


module.exports = ActorContainer;