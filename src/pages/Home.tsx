import { useEffect, useState } from 'react';
import { Grid, Typography, Button, useTheme } from '@mui/material';
import { Questions } from '../assets/questions.tsx';
import QuestionCard from '../components/QuestionCard.tsx';

const Home = () => {
    const { questions } = Questions[0];
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTestFinished, setIsTestFinished] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        if(currentQuestionIndex > 0) {
            window.scrollTo(0, 0);
        }
    }, [currentQuestionIndex]);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsTestFinished(true);
        }
    };
    const resetTest = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setIsTestFinished(false);
    };

    const scorePercentage = (score / questions.length) * 100;
    const hasPassed = scorePercentage >= 70;

    return (
        <Grid container spacing={2} sx={{ p: 2 }} justifyContent={'center'}>
            <Grid item xs={12} md={4}>
                <Typography variant={theme.breakpoints.down('sm') ? "body1" : "h6"}>Score: {score}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant={theme.breakpoints.down('sm') ? "body1" : "h6"}>Question: {currentQuestionIndex + 1}/{questions.length}</Typography>
            </Grid>
            {!isTestFinished ? (
                <Grid item xs={12} md={8}>
                    <QuestionCard {...questions[currentQuestionIndex]} onAnswer={handleAnswer} />
                </Grid>
            ) : (
                <Grid item xs={12} md={8}>
                    <Typography variant={theme.breakpoints.down('sm') ? "body1" : "h5"} component="div" gutterBottom>
                        Test finished. Your score is {scorePercentage}%. You have {hasPassed ? 'passed' : 'failed'}.
                    </Typography>
                    <Button variant="contained" onClick={resetTest}>
                        Reset Test
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

export default Home;