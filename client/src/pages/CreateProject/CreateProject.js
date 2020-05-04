import { createProjectAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';
import {userImageArrow} from "../../images";
import './CreateProject.sass';
class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }

    render() {
        return (
            <div>
                <div className="CreateProject-mainContainer">
                    <div className="CreateProject-Container">
                        <div className="CreateProject-header">
                            <img src={userImageArrow} width="48" height="48" alt="arrow"/>
                            <div className="CreateProject-Inner">
                                <span>Create an Project</span>
                                <label className={"CreateProject-formLabel"}>NAME PROJECT: </label>
                                 <input className={"CreateProject-formInputValidateEmpty"} type={"text"} value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                 <button className={"CreateProject-btnHome"}
                                         onClick={() => this.props.createProject({...this.state})}>Create Project </button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    createProject: (data) =>  dispatch(createProjectAction(data))
});

export default connect(null, mapDispatchToProps)(CreateProject);
