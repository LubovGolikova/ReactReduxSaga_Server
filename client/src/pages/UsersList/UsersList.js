import {getAllUsersAction, deleteUserAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';
import { userImageNotFound} from "../../images";
import './UsersList.sass';
import UserItem from "../../components/UserItem/UserItem"
class UsersList extends Component {


    componentDidMount() {
        this.props.getAllUsersAction();
    }
    renderData() {
        if(this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            this.props.users.map( u => {
                const deleteUser = () => {
                    this.props.deleteUser(u);
                };

                return <UserItem user={u} onClick={deleteUser} key={u.id}>

                </UserItem>
            })
        );
    }

    render() {
        return (
            <div>
                <div className="Users-mainContainer">
                    <div className="Users-Container">
                        <div className="Users-header">
                            <div className="Users-headerAttribute">
                                <div className="Users-Picture" style={{backgroundImage: `url(${userImageNotFound})`}}>
                                </div>
                                <button className={"Users-btnHome"} >Check-out</button>
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
    const {users, error, isFetching} =state.developerReducer;
    return {users, error, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    getAllUsersAction: () => {
        return dispatch(getAllUsersAction())
    },
    deleteUser: (user) => dispatch(deleteUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
