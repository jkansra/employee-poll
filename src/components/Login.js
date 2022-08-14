import { useState } from "react";
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";


export const Login = (props) => {
    const [loggedUser, setLoggedUser] = useState("")
    const navigate = useNavigate()
    const { dispatch } = props;
    const handleLoginChange = (e) => {
        e.target.value === "Select User" ? setLoggedUser("") : setLoggedUser(e.target.value)
        navigate("/home")
    }
    dispatch(setAuthedUser(loggedUser));
    return (<>
        <span>Please select the user to login:&nbsp;</span>
        <select onChange={handleLoginChange} value={loggedUser} data-testid="select-login">
            {props.userNames.map(userName =>
                <option key={userName}>{userName}</option>
            )}
        </select></>)
}

const mapStateToProps = ({ users }) => ({
    userNames: ["Select User", ...Object.keys(users)]
})


export default connect(mapStateToProps)(Login);
