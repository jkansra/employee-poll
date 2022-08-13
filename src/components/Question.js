import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
    const { question } = props;
    const navigate = useNavigate();
    return (
        <div className="question-box">
            <h4 className="center">{question.author}</h4>
            <p className="timestamp center">{formatDate(question.timestamp)}</p>
            <button className="btn" onClick={() => navigate(`/questions/${question.id}`)}>Show</button>
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
