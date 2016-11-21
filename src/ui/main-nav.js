//TODO main top-bar notification, profile settings, search, etc ...
import  React  from 'react';
export class Nav extends React.Component {
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


    handleOnChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.dir(e);
        console.dir(this);
        console.log('user: '+ this.state.username);
        console.log('pass: ' + this.state.password);
        if(true){
             console.log(this.target.style.display = 'none');

        }

        // console.dir(this);
        // console.dir(e);
    }

    render() {
        const {username, password, isLoading } = this.state;
        return (
            <div className={"navbar navbar-default"}>

                    <form className="navbar-form navbar-right" onSubmit={this.handleSubmit} >
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
                                disabled={isLoading}>Sign In</button>
                    </form>
            </div>
        )
    }
}
{/*<ul className={"nav nav-pills"} ref={'options'} role="tablist"  style={{display:"none"}}>*/
}
{/*<li role="presentation" className="active" onClick={this.hide.bind(this)}><a href="#">Home <span className="badge">42</span></a></li>*/
}
{/*<li role="presentation" className="active"><a href="#">Profile</a></li>*/
}
{/*<li role="presentation" className="disabled"><a href="#">Messages <span className="badge">3</span></a></li>*/
}
{/*</ul>*/
}

{/*<button className="btn-info btn-group" style={{display:"none"}} onClick={this.logoutHandler.bind(this)}>Logout</button>*/
}
{/*</form>*/
}