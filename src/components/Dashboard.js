import { useState } from "react";
import { connect } from "react-redux"
import Question from "./Question";

const Dashboard = (props) => {
    const newQuestions = [];
    const doneQuestions = [];
    const { questionIds, questions, authedUser } = props;
    questionIds?.forEach((questionId) => {
        questions[questionId].optionOne?.votes?.includes(authedUser) || questions[questionId].optionTwo?.votes?.includes(authedUser) ?
            doneQuestions.push(questions[questionId]) : newQuestions.push(questions[questionId])
    })
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="switch-wrapper">
                <span>Toggle to View Answered/Unanswered Polls &nbsp;</span>
                <label className="switch">
                    <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)} />
                    <span className="slider"></span>
                </label>
            </div>
            {
                !toggle ?
                    <div className="box mb-20">
                        <h2 className="center">New Questions</h2>
                        <ul>
                            {newQuestions?.map(newQuestion => (
                                <li key={newQuestion.id} className="question-block">
                                    <Question id={newQuestion.id} />
                                </li>
                            ))
                            }
                        </ul>
                    </div> :
                    <div className="box">
                        <h2 className="center">Done</h2>
                        <ul>
                            {doneQuestions?.map(doneQuestion => (
                                <li key={doneQuestion.id} className="question-block">
                                    <Question id={doneQuestion.id} />
                                </li>
                            ))
                            }
                        </ul>
                    </div>
            }
        </>
    )
}

const mapStateToProps = ({ authedUser, questions }) => (
    {
        authedUser,
        questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        questions
    }
)

export default connect(mapStateToProps)(Dashboard);
