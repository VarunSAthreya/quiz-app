import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { VITE_APP_API_URL } from '../../env';
import Header from './Components/Header';
import QuizContainer from './Components/QuizContainer';
import './style/style.css';
function TakeQuizPreview(props) {
    const { id } = useParams();
    const [quiz, setQuiz] = useState({});
    const { quizName, questions } = props;

    useEffect(() => {
        const data = {
            quizName: quizName,
            questions: questions,
        };
        setQuiz({ ...data });
    }, []);

    return (
        <div>
            <Header title={quiz.quizName} />
            <QuizContainer quiz={quiz} />
        </div>
    );
}

export default TakeQuizPreview;
