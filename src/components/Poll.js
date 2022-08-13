import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSubmitPoll } from "../actions/questions";

export const Poll = (props) => {
    const params = useParams()
    const { questionId } = params
    const { questions, users, dispatch, authedUser } = props;
    const author = questions[questionId].author;
    const optionOne = questions[questionId].optionOne.text;
    const optionTwo = questions[questionId].optionTwo.text;
    return (
        <div className="center">
            <h3>Poll by {author}</h3>
            <img src={users[author].avatarURL} alt={`avatar of ${author}`} />
            <h3>Would You Rather</h3>
            <div className="poll-wrapper">
                <div className="each-poll">
                    <p className="poll-option">{optionOne}</p>
                    <button className="btn center" type="submit" onClick={() => dispatch(handleSubmitPoll({ authedUser, questionId, answer: "optionOne" }))}>
                        Click Here
                    </button>
                </div>
                <div className="each-poll">
                    <p className="poll-option">{optionTwo}</p>
                    <button className="btn center" type="submit" onClick={() => dispatch(handleSubmitPoll({ authedUser, questionId, answer: "optionTwo" }))}>
                        Click Here
                    </button>
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
