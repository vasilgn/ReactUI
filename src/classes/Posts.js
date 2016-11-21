import React from 'react';
import {SinglePost} from './SinglePost.js';
import {SingleComment} from './SingleComment.js';

// export class Post extends React.Component{
//     constructor(header,main,footer){
//         super();
//         this.header = '<header>'
//     }
//     getComments(data){
//
//     }
//     createPost(){
//
//     }
// }


export let Posts = React.createClass({
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
