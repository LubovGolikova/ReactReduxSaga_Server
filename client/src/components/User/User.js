import  React, {Component} from 'react';
import './User.sass';
import {userImageMountains, userImageNotFound } from "../../images";
// import {userImageArrowLeft} from "../../images";
import {userImageArrow} from "../../images";
//import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            user: null
        }
    }



    render() {
        return (
            <>
                <div className="User-mainContainer">
                    <div className="User-Container">
                        <div className="User-header" style={{backgroundImage: `url(${userImageMountains})`}}>
                            <div className="User-headerAttribute">
                                <img src={userImageArrow} width="48" height="48" alt="arrow"/>
                                <span>Coach</span>
                            </div>
                            <div className="User-Picture" style={{backgroundImage: `url(${userImageNotFound})`}}>
                            </div>
                        </div>
                         {/*<label className={"User-formLabel"}>FIRST NAME: {JSON.stringify(this.state.user.firstName)}</label>*/}
                          {/*<label className={"User-formLabel"}>LAST NAME: {JSON.stringify(this.state.user.lastName)}</label>*/}
                          {/*<label className={"User-formLabel"}>EMAIL ADDRESS: {JSON.stringify(this.state.user.email)}</label>*/}
                    </div>
                </div>
            </>
        );
    }
//
//     componentDidMount() {
//
//         axios.get('http://192.168.239.129:3003/user/'+ this.props.match.params.id)
//             .then(({data}) => {
//                 this.setState({user: data});
//             })
//             .catch((err) => {
//                 this.setState({ error: err});
//             });
//     }
}
export default User;
