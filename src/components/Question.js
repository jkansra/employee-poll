import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
    const { question } = props;
    return (
        <div className="question-box">
            <h4 className="center">{question.author}</h4>
            <p className="timestamp center">{formatDate(question.timestamp)}</p>
            <button className="btn">Show</button>
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }, { id }) => {
    const question = questions[id];

    return {
        authedUser,
        question
    }
}

export default connect(mapStateToProps)(Question);
