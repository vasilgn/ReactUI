import React from 'react';
export class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(e){
        e.preventDefault();
        console.dir(this.props.onUpdate());

    }
    render() {

        return (
            <div className="navbar-form">
                <div className="form-group">
                    <ul className="nav nav-pills navbar-left">
                        <li role="presentation" className="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                    </ul>
                </div>
                <button className="btn btn-default navbar-right" onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}