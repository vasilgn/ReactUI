import React from 'react';
// import ReactDom from 'react-dom';
import {Posts} from './src/classes/Posts.js';
import {tweets} from './data.js';
// import {Page} from './src/ui/page.js';
// import {leftSideBar}from'./src/ui/left-dashboard.js';
import {Nav} from './src/ui/main-nav.js';

class App extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <Nav />
                    <div className="col-xs-3" style={{background: 'black'}}>
                        <h1>News feed</h1>
                    </div>

                    <div className="col-xs-9" ref={'main'} style={{background: 'cyan'}}>

                    </div>
            </div>
        );
    }
}


export default App;