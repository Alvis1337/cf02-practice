import React, { useState } from 'react';
import { Button, Card, CardContent, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const QuestionCard = ({ question, answers, solution, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer[0] === solution) {
            alert('Correct!');
            onAnswer(true);
        } else {
            alert(`Your answer ${selectedAnswer} is incorrect, the correct answer is ${solution}`);
            onAnswer(false);
        }
    };

    return (
        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {question}
                </Typography>
                <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                >
                    {answers.map((answer, index) => (
                        <FormControlLabel key={index} value={answer} control={<Radio />} label={answer} />
                    ))}
                </RadioGroup>
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;