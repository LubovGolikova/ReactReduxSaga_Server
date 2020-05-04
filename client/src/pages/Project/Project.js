import {getAllProjectsAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';
import './Project.sass';
import {userProject} from "../../images";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
class Project extends Component {

    componentDidMount() {
        this.props.getAllProjectsAction();
    }
    renderData() {
        if(this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            this.props.projects.map( u => {
                return <ProjectItem project={u} key={u.id}></ProjectItem>
            })
        );
    }
    render() {
        return (
        <div>
            <div className="Project-mainContainer">
                <div className="Project-Container">
                        <div className="Project-header">
                            <div className="Project-headerAttribute">
                                <div className="Project-Picture" style={{backgroundImage: `url(${userProject})`}}>
                                </div>
                                <button className={"Project-btnHome"} >Check-out</button>
                            </div>
                        </div>
                    {this.renderData()}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {projects, error, isFetching} = state.projectReducer;
    return {projects, error, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    getAllProjectsAction: () => {
        return dispatch(getAllProjectsAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
