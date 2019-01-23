"use strict";

var React = require('react');
var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({
    render: function(){
        return (

            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="row">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link to="app"><img src="/images/logo.png" /></Link>
                            </li>
                            <li className="nav-item btn"><Link to="app">Home</Link></li>
                            <li className="nav-item btn"><Link to="authors">Authors</Link></li>
                            <li className="nav-item btn"><Link to="about">About</Link></li>
                            
                        </ul>

                    </div>
                </div>

            </div>

        );
    }
});

module.exports = Header;