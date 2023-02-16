import { useState } from 'react';
import Header from './Header';
import AddQuestionButton from './AddQuestionButton';
import '../styles/admin.css';

const QuizContainer = () => {
    const [quizName, setQuizName] = useState('');
    const [questions, setQuestions] = useState([]);

    return (
        <div>
            <Header quizName={quizName} setQuizName={setQuizName} />
            <AddQuestionButton
                questions={questions}
                setQuestions={setQuestions}
            />
        </div>
    );
};

export default QuizContainer;
