import {getProjectByIdAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';

class ProjectProfile extends Component {

    componentDidMount() {
        this.props.getProjectByIdAction(this.props.match.params.id);
    }
    renderData() {
        if(this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            <span>{JSON.stringify(this.props.project)}</span>
        );
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderData()}
            </div>

        );
    }
}

const mapStateToProps = (state, routerProps) => {
    console.log(routerProps);
    const {projects, error, isFetching} = state.projectReducer;
    const projectId = parseInt(routerProps.match.params.id);
    const project = projects.find((u) => u.id === projectId);
    return {project, error, isFetching};

};

const mapDispatchToProps = (dispatch) => ({
    getProjectByIdAction: (id) => dispatch(getProjectByIdAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectProfile);
