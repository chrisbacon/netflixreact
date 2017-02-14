var React = require('react');

var MovieDetail = function(props){
    if (!props.movie){
        return <h4>No movie selected</h4>
    }
    return (<div>
        <h4> {props.movie.show_title}</h4>
        </div>)
};

module.exports = MovieDetail;