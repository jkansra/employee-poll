import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSubmitPoll } from "../actions/questions";
import NotFound from "./NotFound";

export const Poll = (props) => {
    const params = useParams()
    const { questionId } = params
    const { questions, users, dispatch, authedUser } = props;
    if (!questions[questionId]) return <NotFound />;
    const author = questions[questionId].author;
    const optionOne = questions[questionId].optionOne.text;
    const optionTwo = questions[questionId].optionTwo.text;
    const optionOneVotes = questions[questionId].optionOne.votes.length;
    const optionTwoVotes = questions[questionId].optionTwo.votes.length;
    const optionOneVotePercentage = Math.round(optionOneVotes / (optionOneVotes + optionTwoVotes) * 100);
    const optionTwoVotePercentage = Math.round(optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100);
    const typeOfQuestion = questions[questionId].optionOne?.votes?.includes(authedUser) || questions[questionId].optionTwo?.votes?.includes(authedUser) ?
        "done" : "new"
    const myAnswer = users[authedUser].answers[questionId];
    return (
        <div className="center">
            <h3>Poll by {author}</h3>
            <img src={users[author].avatarURL} alt={`avatar of ${author}`} width="100" height="100" />
            <h3>Would You Rather</h3>
            <div className="poll-wrapper">
                <div className={`each-poll ${myAnswer === 'optionOne' ? "my-answer" : ""}`}>
                    <p className="poll-option">{optionOne}</p>
                    {typeOfQuestion === "new" ?
                        <button className="btn center" type="submit" onClick={() => dispatch(handleSubmitPoll({ authedUser, qid: questionId, answer: "optionOne" }, users))}>
                            Click Here
                        </button>
                        :
                        <div>
                            <p>{optionOneVotes} people voted for this option</p>
                            <p>{optionOneVotePercentage}% people chose this option</p>
                        </div>}
                </div>
                <div className={`each-poll ${myAnswer === 'optionTwo' ? "my-answer" : ""}`}>
                    <p className="poll-option">{optionTwo}</p>
                    {typeOfQuestion === "new" ?
                        <button className="btn center" type="submit" onClick={() => dispatch(handleSubmitPoll({ authedUser, qid: questionId, answer: "optionTwo" }, users))}>
                            Click Here
                        </button>
                        :

                        <div>
                            <p>{optionTwoVotes} people voted for this option</p>
                            <p>{optionTwoVotePercentage}% people chose this option</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions,
    users
})

export default connect(mapStateToProps)(Poll);
