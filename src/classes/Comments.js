import React from 'react';
import {SingleComment} from './SingleComment.js';

export let Comments = React.createClass({
    render: function () {
        let comments = this.props.comments;
        if (Object.keys(this.props.comments)) {
            return (
                <div>
                    <h3>Comments:</h3>
                    {Object.keys(this.props.comments).map(function (item) {
                        return (
                            <SingleComment comment={comments[item]} key={item}/>
                        )
                    })
                    }
                </div>
            )
        }
    }
});

// import React, { Component } from 'react'
//
// class Comment extends Component {
//     render() {
//         return (
//             <div className="comment">
//                 <div className="actor">
//                     {this.props.firstName} {this.props.lastName.charAt(0) + '.'}
//                 </div>
//                 <div className="time">
//                     <TimeAgo timestamp={this.props.createdAt} />
//                 </div>
//                 <div className="text">
//                     {this.props.comment}
//                 </div>
//             </div>
//         )
//     }
// }