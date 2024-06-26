import { useState } from 'react';
import { Button, Card, CardContent, FormControlLabel, Checkbox, FormGroup, Typography } from '@mui/material';
import { toast } from 'react-toastify';

interface QuestionProps {
    question: string;
    answers: string[];
    solution: string;
    onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionProps> = ({ question, answers, solution, onAnswer }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedAnswers(prev =>
            prev.includes(value) ? prev.filter(answer => answer !== value) : [...prev, value]
        );
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
    };

    return (
        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
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
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;