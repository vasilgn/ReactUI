//TODO main top-bar notification, profile settings, search, etc ...
import React from 'react';
export class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    handleOnChange(e) {
        console.log(`field: ${e.target.name}, value: ${e.target.value}`);
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.dir(e);
        console.dir(this);
        console.log('user: ' + this.state.username);
        console.log('pass: ' + this.state.password);
        if (true) {
            this.props.onUpdate()
        }

    }

    render() {
        const {username, password, isLoading} = this.state;

        return (

                <form className="navbar-form navbar-right" ref={'login'}  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="username"
                               value={username}
                               onChange={this.handleOnChange}
                               placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control"
                               name="password"
                               value={password}
                               onChange={this.handleOnChange}
                               placeholder="Password"/>
                    </div>
                    <button type="submit"
                            className="btn btn-default"
                            disabled={isLoading}>Sign In
                    </button>
                </form>

        )
    }
}
