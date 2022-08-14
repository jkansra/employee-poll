import { useState } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const navigate = useNavigate();

  const handleOptionOneChange = (e) => {
    const optionOneText = e.target.value;

    setOptionOne(optionOneText);
  };

  const handleOptionTwoChange = (e) => {
    const optionTwoText = e.target.value;

    setOptionTwo(optionTwoText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddPoll(optionOne, optionTwo));

    setOptionOne("");
    setOptionTwo("");

    navigate(`/home`)

  };

  return (
    <div className="mb-20">
      <h3 className="center">Would You Rather</h3>
      <p className="center">Create your own poll</p>
      {/* Form */}
      <form className="new-poll" onSubmit={handleSubmit}>
        <label className="center mb-10">First Option</label>
        <input placeholder="Option One" className="mb-20" value={optionOne} onChange={handleOptionOneChange} data-testid="first-option-input" />
        <label className="center mb-10">Second Option</label>
        <input placeholder="Option Two" className="mb-20" value={optionTwo} onChange={handleOptionTwoChange} data-testid="second-option-input" />
        <button className="center" type="submit" disabled={optionOne === "" || optionTwo === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
