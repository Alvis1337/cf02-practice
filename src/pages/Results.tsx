import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Questions } from '../assets/questions.tsx';

interface ResultsProps {
    userAnswers: {
        answers: { [key: number]: string[]; };
    };
    selectedExam: {
        selectedExam: string;
    };
}

const Results: React.FC<ResultsProps> = ({userAnswers, selectedExam}) => {

    const answerSheet = Questions.find(exam => exam.name === selectedExam.selectedExam);
    const questions = answerSheet ? answerSheet.questions : [];
    let initialGrade = 0;
    questions.forEach((question, index) => {
        const userAnswer = userAnswers.answers[index] || [];
        const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.solution.split(',').map(s => s.trim()).sort());
        if (isCorrect) {
            initialGrade++;
        }
    });

    return (
        <List>
            <Typography variant="h4">Results</Typography>
            <Typography variant="h6">{initialGrade !== 0 ? `Questions: ${initialGrade}/${questions.length}` : "Grade: 0"}</Typography>
            <Typography variant="h6">{initialGrade !== 0 ? `Grade: ${(initialGrade / questions.length * 100).toFixed(2)}%` : "Grade: 0"}</Typography>
            {questions.map((question, index) => {
                const userAnswer = userAnswers.answers[index] || [];
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