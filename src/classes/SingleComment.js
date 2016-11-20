import React from 'react';
export let SingleComment = React.createClass({

    render: function() {
        return (
            <span style={{position: "relative"}}>
                {this.props.comment.text}<br/>
            </span>
        )
    }
});