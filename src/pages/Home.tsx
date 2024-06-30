import {useEffect, useState} from 'react';
import {Button, Grid, Typography, useTheme, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import {Questions} from '../assets/questions.tsx';
import QuestionCard from '../components/QuestionCard.tsx';
import {resetAnswers} from "../store/reducers/answerReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import Results from "./Results.tsx";
import {selectExam} from "../store/reducers/examReducer.ts";
import {RootState} from "../store/store.ts";

const Home = () => {
    const [selectedExam, setSelectedExam] = useState(Questions[0].name);
    const [questions, setQuestions] = useState(Questions.find(exam => exam.name === selectedExam)?.questions || []);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const dispatch = useDispatch();
    const exam = useSelector((state: RootState) => state.exam);
    const userAnswers = useSelector((state: RootState) => state.answers);


    useEffect(() => {
        setQuestions(Questions.find(exam => exam.name === selectedExam)?.questions || []);
    }, [selectedExam]);

    const theme = useTheme();

    const resetTest = () => {
        dispatch(resetAnswers());
        setCurrentQuestionIndex(0);
        setIsTestFinished(false);
    };

    const handleExamChange = (event: SelectChangeEvent<string>) => {
        setSelectedExam(event.target.value as string);
        dispatch(selectExam(event.target.value as string));
        resetTest();
    };

    useEffect(() => {
        setSelectedExam('Practice Exam 1')
        dispatch(selectExam('Practice Exam 1'));
    }, []);

    useEffect(() => {
        if (currentQuestionIndex > 0) {
            window.scrollTo(0, 0);
        }
    }, [currentQuestionIndex]);

    const handleAnswer = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsTestFinished(true);
        }
    };

    return (
        <Grid container spacing={2} sx={{p: 2}} justifyContent={'center'}>
            <Grid item xs={12} md={4}>
                <Typography
                    variant={theme.breakpoints.down('sm') ? "body1" : "h6"} textAlign={'center'}>Question: {currentQuestionIndex + 1}/{questions.length}</Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Select value={selectedExam} onChange={handleExamChange}>
                    {Questions.map((exam, index) => (
                        <MenuItem key={index} value={exam.name}>
                            {exam.name}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            {!isTestFinished ? (
                <Grid item xs={12} md={8}>
                    <QuestionCard {...questions[currentQuestionIndex]} onAnswer={handleAnswer}
                                  currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex}/>
                </Grid>
            ) : (
                <Grid item xs={12} md={8}>
                    <Results userAnswers={userAnswers} selectedExam={exam} />
                    <Button variant="contained" onClick={resetTest}>
                        Reset Test
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

export default Home;