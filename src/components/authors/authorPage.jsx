"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");

var Authors = React.createClass({

    getInitialState: function(){
        return {
            authors: []
        };
    },

    componentWillMount: function() {

        //use setter here
        this.setState({ authors: AuthorApi.getAllAutors()});

    },

    render: function(){

        //create a function to iterate through authors passed in props
        var createAuthorRow = function(author){
            return (
                //use key for each elem, common pattern is primary key from db
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>

            );
        };

        return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.state.authors.map(createAuthorRow, this)}
                </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;