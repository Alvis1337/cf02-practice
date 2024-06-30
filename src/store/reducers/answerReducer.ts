import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AnswerState {
    answers: { [key: number]: string[] };
}

const initialState: AnswerState = {
    answers: {},
};

const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        submitAnswer: (state, action: PayloadAction<{ answerIndex: number; answer: string[] }>) => {
            const { answerIndex, answer } = action.payload;
            state.answers[answerIndex] = answer;
        },
        resetAnswers: (state) => {
            state.answers = {};
        },
    },
});

export const { submitAnswer, resetAnswers } = answerSlice.actions;

export default answerSlice.reducer;