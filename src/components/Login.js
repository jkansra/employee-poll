import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";


export const Login = (props) => {
    const [loggedUser, setLoggedUser] = useState("")
    const navigate = useNavigate()
    const location = useLocation();
    const { dispatch, userNames } = props;

    const handleLoginChange = (e) => {
        setLoggedUser(e.target.value)
        location.pathname === '/' ? navigate("/home") : navigate(location.pathname)
    }

    useEffect(() => {
        dispatch(setAuthedUser(loggedUser));
    }, [dispatch, loggedUser])

    return (<>
        <span>Please select the user to login:&nbsp;</span>
        <select onChange={handleLoginChange} value={loggedUser} data-testid="select-login">
            <option value={loggedUser}>Select User</option>
            {userNames.map(userName =>
                <option key={userName}>{userName}</option>
            )}
        </select></>)
}

const mapStateToProps = ({ users }) => ({
    userNames: Object.keys(users)
})


export default connect(mapStateToProps)(Login);
