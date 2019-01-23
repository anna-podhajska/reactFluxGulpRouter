"use strict";
var React = require('react');
var Router = require("react-router");
var routes = require("./routes");

//run the router and render application 

//second parameter will make Router use HistoryLocation URL style instead of Hash which is def: myurl/#/route and history is pushed into browser's state
// Router.run(routes, Router.HistoryLocation, function(Handler){
//     React.render(<Handler/>, document.getElementById("app"));
// });

//use hash for the purpose of the course
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById("app"));
});
