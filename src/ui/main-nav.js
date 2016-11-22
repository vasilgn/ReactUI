//TODO main top-bar notification, profile settings, search, etc ...
import  React  from 'react';
import {LoginForm} from './login-form.js';
import {UserNav} from './user-nav.js';
export class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedId: false,
        }
    }
    onUpdate(){
        if(this.state.isLoggedId){
            this.setState({isLoggedId:false});
        }
        else{
            this.setState({isLoggedId:true});
        }
        console.dir(this.state.isLoggedId)
    }
    render() {
        return (
            <div className={"navbar navbar-default navbar-inverse navbar-static-top"} >
                {this.state.isLoggedId && <UserNav onUpdate={this.onUpdate.bind(this)}/>}
                {!this.state.isLoggedId && <LoginForm onUpdate={this.onUpdate.bind(this)}/>}
            </div>
        )
    }
}
