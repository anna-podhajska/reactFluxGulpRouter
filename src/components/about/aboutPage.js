"use strict";

var React = require('react');

var About = React.createClass({

    //STATICS
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            //logic whether this page be transition to:
            if (!confirm("Are you sure you want to read this page, that\'s boring")) {
                transition.about();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            //logic whether this page be transition to:
            if (!confirm("Are you sure you want to leave this page?")) {
                transition.about();
            }
        }
    },


    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserfy</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
