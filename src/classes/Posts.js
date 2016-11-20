import React from 'react';
import {SinglePost} from './SinglePost.js';
import {SingleComment} from './SingleComment.js';

// class Postts {
//     constructor(author,content,comments){
//         this.author = author;
//         this.content = content;
//         this._comments = this.comments(comments);
//     }
//     get comments(){
//         return this._comments;
//     }
//     set comments(comments){
//         return this._comments.assert(comments,{});
//     }
//
//     createPost(){
//
//     }
// }


export let Posts = React.createClass({
    props: {},
    render: function () {
        return (
            <div>
                <h1>Posts </h1>
                <div>
                    {this.props.items.map(function (item, index) {

                        return (
                            <SinglePost item={item} key={"item" + index}/>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
});
