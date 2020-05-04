import {createAccountAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';
import {userImageArrow} from "../../images";
import './CreateAccount.sass';
class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",

        };

    }
    render() {
        return (
            <div>
                <div className="CreateAccount-mainContainer">
                    <div className="CreateAccount-Container">
                        <div className="CreateAccount-header">
                            <img src={userImageArrow} width="48" height="48" alt="arrow"/>
                            <div className="CreateAccount-Inner">
                                <span>Create an Account</span>
                                <label className={"CreateAccount-formLabel"}>FIRST NAME: </label>
                               <input className={"CreateAccount-formInputValidateEmpty"} type={"text"}
                                      value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>

                                <label className={"CreateAccount-formLabel"}>LAST NAME: </label>
                               <input className={"CreateAccount-formInputValidateEmpty"} type={"text"}
                                      value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>

                                <label className={"CreateAccount-formLabel"}>EMAIL ADDRESS: </label>
                                <input className={"CreateAccount-formInputValidateEmpty"} type={"email"}
                                       value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                <button  className={"CreateAccount-btnHome"}
                                         onClick={() => this.props.createAccount({...this.state})}>Create Acount </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    createAccount: (data) =>  dispatch(createAccountAction(data))
});

export default connect(null, mapDispatchToProps)(CreateAccount);
