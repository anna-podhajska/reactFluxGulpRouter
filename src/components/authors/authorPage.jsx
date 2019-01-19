"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList.jsx");

var AuthorPage = React.createClass({

    //initial state - empty array with authors - no authors yet
    getInitialState: function(){
        return {
            authors: []
        };
    },

    //use setter here to set state after mount - use callback or promise if calling real api
    componentDidMount: function() {

        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function(){

        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
                
            </div>
        );
    }
});

module.exports = AuthorPage;