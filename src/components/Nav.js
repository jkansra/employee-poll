import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const { authedUser, users } = props
    return (
        <nav className="nav">
            <ul>
                <div className="users-column">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/add">New</Link>
                    </li>
                </div>
                <div className="users-column">
                    <li>
                        <img src={users[authedUser].avatarURL} alt={`avatar of ${authedUser}`} width="20" height="20" />
                        <span>{users[authedUser].name}</span>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users
})


export default connect(mapStateToProps)(Nav);
