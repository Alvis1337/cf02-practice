import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Questions } from '../assets/questions.tsx';

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

const Results = () => {
    const userAnswers = useSelector((state: RootState) => state.question.answers);
    const selectedExam = useSelector((state: RootState) => state.exam.selectedExam);

    const exam = Questions.find(exam => exam.name === selectedExam);
    const questions = exam ? exam.questions : [];

    return (
        <List>
            {questions.map((question, index) => {
                const userAnswer = userAnswers[index.toString() as keyof typeof userAnswers] || [];
                const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.solution.split(',').map(s => s.trim()).sort());
                return (
                    <ListItem key={index}>
                        <ListItemText>
                            <Typography variant="body1">
                                {question.question}
                            </Typography>
                            {question.answers.map((answer, answerIndex) => {
                                const isSelected = userAnswer.includes(answer);
                                const isAnswerCorrect = question.solution.includes(answer);
                                const color = isSelected ? (isAnswerCorrect ? 'green' : 'red') : 'default';
                                return (
                                    <Typography key={answerIndex} variant="body2" style={{ color }}>
                                        {answer}
                                    </Typography>
                                );
                            })}
                            <Typography variant="body2" color={isCorrect ? 'green' : 'red'}>
                                Your answer was {isCorrect ? 'correct' : `incorrect it was ${question.solution}`}.
                            </Typography>
                            <Typography variant="body2">
                                {userAnswer.length > 0 ? `You selected: ${userAnswer.join(', ')}` : 'You did not select an answer.'}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Results;