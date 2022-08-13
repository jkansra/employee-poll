import { useState } from "react";
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser";


export const Login = (props) => {
    const [loggedUser, setLoggedUser] = useState("")
    const { dispatch } = props;
    const handleLoginChange = (e) => {
        e.target.value === "Select User" ? setLoggedUser("") : setLoggedUser(e.target.value)
    }
    dispatch(setAuthedUser(loggedUser));
    return (<>
        <span>Please select the user to login:&nbsp;</span>
        <select onChange={handleLoginChange} value={loggedUser}>
            {props.userNames.map(userName =>
                <option key={userName}>{userName}</option>
            )}
        </select></>)
}

const mapStateToProps = ({ users }) => ({
    userNames: ["Select User", ...Object.keys(users)]
})


export default connect(mapStateToProps)(Login);
