//TODO main top-bar notification, profile settings, search, etc ...
import {Navbar} from 'react-bootstrap';

import React from 'react';
export class Nav extends React.Component{

    loginHandle(e){
        e.preventDefault();
        this.refs.log.style.display = 'none';
        this.refs.options.style.display = 'inline-block';
    }
    hide(){
        this.refs.log.style.display = 'inline-block';
        this.refs.options.style.display = 'none';
    }
    render  () {

        return <Navbar className={this.props.className} >
                <ul className={"nav nav-pills"} ref={'options'} role="tablist"  style={{display:"none"}}>
                    <li role="presentation" className="active" onClick={this.hide.bind(this)}><a href="#">Home <span className="badge">42</span></a></li>
                    <li role="presentation" className="active"><a href="#">Profile</a></li>
                    <li role="presentation" className="disabled"><a href="#">Messages <span className="badge">3</span></a></li>
                </ul>
            <form className={'login-form'} ref={'log'}>
                <input type="text"/>
                <input type="password"/>
                <button className="btn-info btn-group" itemID="login" onClick={this.loginHandle.bind(this)}>Login</button>
            </form>
            </Navbar>
    }
}