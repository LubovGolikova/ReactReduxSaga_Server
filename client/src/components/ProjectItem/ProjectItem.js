import React, {Component} from 'react';
import './ProjectItem.sass';

class ProjectItem extends Component {

    render() {
        return (
            <div className={"ProjectItem-container"}
                 onClick={() => this.props.pushProject("/projects/" + this.props.project.id)}>
                <div className={"ProjectItem-Data"}>
                <span>
                    {this.props.project.name }
                </span>

                </div>
            </div>
        );
    }
}

export default ProjectItem;
