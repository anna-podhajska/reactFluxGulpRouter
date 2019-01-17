"use strict";

var React = require('react');

var Header = React.createClass({
    render: function(){
        return (

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="/"><img src="/images/logo.png" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#authors">Authors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#about">About</a>
                </li>
            </ul>

        );
    }
});

module.exports = Header;