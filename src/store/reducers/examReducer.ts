import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExamState {
    selectedExam: string;
}

const initialState: ExamState = {
    selectedExam: '',
};

const examSlice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        selectExam: (state, action: PayloadAction<string>) => {
            state.selectedExam = action.payload;
        },
    },
});

export const { selectExam } = examSlice.actions;

export default examSlice.reducer;