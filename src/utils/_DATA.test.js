import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe("_DATA", () => {
    it("_saveQuestion will return the formatted question", async () => {
        const question = {
            optionOneText: "React",
            optionTwoText: "React-Redux",
            author: "testname"
        }
        const result = await _saveQuestion(question);
        expect(result.author).toEqual(question.author);
        expect(result.optionOne.text).toEqual(question.optionOneText);
        expect(result.optionTwo.text).toEqual(question.optionTwoText);
    })

    it("_saveQuestion will return the formatted question", async () => {
        const question = {
            optionOneText: "React",
            author: "testname"
        }
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    })

    it("_saveQuestion will throw error if incorrect question is passed", async () => {
        const question = {
            optionOneText: "React",
            optionTwoText: "React-Redux",
        }
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    })

    it("_saveQuestionAnswer will save the answer for the respective question by the respective user", async () => {
        const answer = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        }
        const result = await _saveQuestionAnswer(answer)
        expect(result).toEqual(true);
    })

    it("_saveQuestionAnswer will throw error if incorrect input is passed", async () => {
        const answer = {
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        }
        await expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    })

    it("_saveQuestionAnswer will throw error if incorrect input is passed", async () => {
        const answer = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
        }
        await expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    })
})
