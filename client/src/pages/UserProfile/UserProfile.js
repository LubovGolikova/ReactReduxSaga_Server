import {getUserByIdAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';

class UserProfile extends Component {

    componentDidMount() {
        this.props.getUserByIdAction(this.props.match.params.id);
    }
    renderData() {
        if(this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            <span>{JSON.stringify(this.props.user)}</span>
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
    const {users, error, isFetching} = state.developerReducer;
    const userId = parseInt(routerProps.match.params.id); // TODO dsfsdff
    const user = users.find((u) => u.id === userId);
    return {user, error, isFetching};

};

const mapDispatchToProps = (dispatch) => ({
    getUserByIdAction: (id) => dispatch(getUserByIdAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
