"use strict";

var React = require("react");

var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

//load/call  each component under each url route:
// if I don't define the "path" then Router assumes that the name of each route is also the path
var routes = (
    //the first "/" is base path to our app component:
    <Route name="app" path="/" handler={require("./components/app")} >
        <DefaultRoute handler={require("./components/homePage")} />
        <Route name="authors" handler={require("./components/authors/authorPage.jsx")} />
        <Route name="about" path="about" handler={require("./components/about/aboutPage")} />

        <NotFoundRoute handler={require("./components/notFoundPage")} />

        //redirect: for example we expired old "about-us" and we redirect to about
        <Redirect from="about-us" to="about" />
        <Redirect from="abut-handleCommonTypos" to="about" />

        //redirect: from subdirectories by using wild cards:
        <Redirect from="about/*" to="about" />

    </Route>


);

module.exports = routes;
