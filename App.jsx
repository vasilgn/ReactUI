import React from 'react';
// import ReactDom from 'react-dom';
import {Posts} from './src/classes/Posts.js';
import {tweets} from './data.js';
// import {Page} from './src/ui/page.js';
// import {leftSideBar}from'./src/ui/left-dashboard.js';
import {Button, Grid,} from 'react-bootstrap';
import {Nav} from './src/ui/global-nav.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this);
        return (
            <Grid className="container-fluid">
                <Nav />
                <div className="row">
                    <div className="col-xs-3" style={{background: 'black'}}>
                        <h1>News feed</h1>
                    </div>

                    <div className="col-xs-9" style={{background: 'red'}}>
                        Posts
                    </div>
                </div>
            </Grid>
        );
    }
}


export default App;