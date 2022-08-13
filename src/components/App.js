import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props])
  return (
    <>
      <LoadingBar />
      <Login />
      {!props.loading && <div className="container">
        <Dashboard />
        <NewPoll />
        <Leaderboard />
      </div>}
    </>)
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === ""
})

export default connect(mapStateToProps)(App);
