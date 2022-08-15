import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Poll from "./Poll";
import NotFound from "./NotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props])
  return (
    <>
      <LoadingBar />
      {props.isAuthenticated ? <div className="container">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/questions/:questionId" element={<Poll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
        : <Login />}
    </>)
};

const mapStateToProps = ({ authedUser }) => ({
  isAuthenticated: authedUser !== ""
})

export default connect(mapStateToProps)(App);
