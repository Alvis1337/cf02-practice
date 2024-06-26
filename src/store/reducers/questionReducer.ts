import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionState {
    answers: { [key: number]: string[] };
}

const initialState: QuestionState = {
    answers: {},
};

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        submitAnswer: (state, action: PayloadAction<{ questionIndex: number; answer: string[] }>) => {
            const { questionIndex, answer } = action.payload;
            state.answers[questionIndex] = answer;
        },
        resetAnswers: (state) => {
            state.answers = {};
        },
    },
});

export const { submitAnswer, resetAnswers } = questionSlice.actions;

export default questionSlice.reducer;