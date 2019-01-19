$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require("./components/authors/authorPage.jsx");
var Header = require('./components/common/header');

//iife to wrap everything below so above are global variables but below is eval in strict mode:
(function(win) {
    "use strict";
    //way to route without Router:
    var App = React.createClass({
        render: function(){
    
            //placeholder for whichever child we want to display
            var Child;
    
            // look at the route and based on that either load about or home cmp without React Router
            switch(this.props.route) {
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }
    
            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });
    
    function render(){
        var route = window.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }
    //on hashchange event render needs to occur
    window.addEventListener('hashchange', render);
    render();
    
    // go take our Home page cmp and attach it to the id of app in html
    // React.render(<Home />, document.getElementById('app'));


})(window);