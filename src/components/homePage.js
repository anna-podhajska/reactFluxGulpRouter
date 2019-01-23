"use strict";

var React = require('react');
var Router = require("react-router");
var Link = Router.Link;

var Home = React.createClass({
render: function(){
    return (
        <div className="jumbotron">
            <h1>React Flux Router course on Pluralsight.</h1>
            <p>When back, continue from React Forms module</p>
            <p>to run server type gulp</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
    );
}
});

module.exports = Home;