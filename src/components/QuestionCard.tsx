import {useState} from 'react';
import {Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, Typography} from '@mui/material';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from "react-redux";
import {submitAnswer} from "../store/reducers/questionReducer.ts";

interface QuestionState {
    answers: Record<string, string[]>;
}

interface ExamState {
    selectedExam: string;
}

interface RootState {
    question: QuestionState;
    exam: ExamState;
}

interface QuestionProps {
    question: string;
    answers: string[];
    solution: string;
    onAnswer: (isCorrect: boolean) => void;
    currentQuestionIndex: number;
    setCurrentQuestionIndex: (index: number) => void;
}

const QuestionCard: React.FC<QuestionProps> = ({question, answers, solution, onAnswer, currentQuestionIndex, setCurrentQuestionIndex}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedAnswers(prev =>
            prev.includes(value) ? prev.filter(answer => answer !== value) : [...prev, value]
        );
    };

    const dispatch = useDispatch();

    const userAnswers = useSelector((state: RootState) => state.question.answers);

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswers(userAnswers[currentQuestionIndex - 1] || []);
        }
    };

    const handleSubmit = () => {
        const solutionArray = solution.split(',').map(s => s.trim());
        const isCorrect = JSON.stringify(selectedAnswers.sort()) === JSON.stringify(solutionArray.sort());
        onAnswer(isCorrect);
        setSelectedAnswers([]);
        if (isCorrect) {
            toast.success('Correct!');
        } else {
            toast.error(`Incorrect! The correct answer was ${solution}`);
        }

        // Dispatch the submitAnswer action
        dispatch(submitAnswer({questionIndex: currentQuestionIndex, answer: selectedAnswers}));
    };

    return (
        <Card sx={{minWidth: 275, marginBottom: 2}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {question}
                </Typography>
                <FormGroup>
                    {answers.map((answer: string, index: number) => (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={selectedAnswers.includes(String.fromCharCode(65 + index))}
                                    onChange={handleCheckboxChange}
                                    value={String.fromCharCode(65 + index)}
                                />
                            }
                            label={answer}
                        />
                    ))}
                </FormGroup>
                <Grid container spacing={2}>
                    {currentQuestionIndex > 0 && (
                        <Grid item>
                            <Button variant="contained" onClick={handleBack}>
                                Back
                            </Button>
                        </Grid>
                    )}
                    <Grid item>
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;