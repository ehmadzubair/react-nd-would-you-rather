import {getQuestions} from "./questions";
import {getUsers} from "./user";

export const updateQuestionsAndUsers = (dispatch) => {
    dispatch(getQuestions())
    dispatch(getUsers())
}