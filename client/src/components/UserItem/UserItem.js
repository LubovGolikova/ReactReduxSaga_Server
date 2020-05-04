import React, {Component} from 'react';
import './UserItem.sass';
import {userImageNotFound} from "../../images";

class UserItem extends Component {

    render() {
        return (
            <div className={"UserItem-container"}
                 onClick={() => this.props.pushUser("/users/" + this.props.user.id)}>
                <div className="UserItem-Picture" style={{backgroundImage: `url(${userImageNotFound})`}}>
                </div>
                <div className={"UserItem-Data"}>
                <span>
                    {this.props.user.firstName + " " + this.props.user.lastName}
                </span>
                <span>
                    {this.props.user.email}
                </span>
                </div>
            </div>
        );
    }
}

export default UserItem;
