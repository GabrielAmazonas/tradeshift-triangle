import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../Actions/login'
import '../App.css';
import { withRouter } from 'react-router-dom';



const mapDispatchToProps = dispatch =>
    bindActionCreators({
        ...loginActions
    }, dispatch)

class LoginForm extends Component {

    render(){

        const { changeUserName } = this.props

        return (
            <div className="App">
                <div className="App-area">
                    <form data-ts="Form">
                        <fieldset>
                            <label class="ts-left">
                                <span> Username</span>
                                <input onChange={(e) => {changeUserName(e.target.value)}} type="text" required/>
                            </label>
                        </fieldset>
                    </form>
                    <button onClick={() => this.props.history.push("/triangle")} data-ts="Button" className="ts-primary">
                        <span>Login</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps)(withRouter(LoginForm));
