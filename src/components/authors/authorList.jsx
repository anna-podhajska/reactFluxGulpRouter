"use strict";

var React = require("react");

var AuthorList = React.createClass({

    //define expectations for props passed and add console logged errors - dev only
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function(){
        console.log("AuthorList - render");

        //create a function to iterate through authors passed in props
        var createAuthorRow = function(author) {
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
                <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
                </table> 
            </div>
        );
    }
});

module.exports = AuthorList;