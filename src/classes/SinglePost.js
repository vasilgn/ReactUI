import React from 'react';
import {Form} from 'react-bootstrap';
import {Comments} from './Comments.js';

export let SinglePost = React.createClass({

    render: function () {
        return (
            <Form>
                <h4 key={this.props.item.post_id}>
                    <span >
                        <a href={'#'} className={this.props.item.key}>{this.props.item.author}</a>
                    </span>
                </h4>
                <div>
                    <a href={"#"}>{this.props.item.content}</a>
                </div>

                <div className={'.comments'}>
                    {
                        <Comments comments={this.props.item.comments} keys={Object.keys(this.props.item.comments)}/>
                    }
                </div>
            </Form>
        )
    }
});