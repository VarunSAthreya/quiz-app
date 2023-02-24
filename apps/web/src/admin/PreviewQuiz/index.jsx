import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { VITE_APP_API_URL } from '../../env';
import Header from './Components/Header';
import QuizContainer from './Components/QuizContainer';
import './style/style.css';

const TakeQuizPreview = (props) => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState({});
    const [state, setState] = useState(null);

    const { quizData } = props;

    const fetchData = async () => {
        const res = await axios.get(`${VITE_APP_API_URL}/quiz/${id}`);
        // console.log(res.data.data);
        // const data = {
        //     quizName: res.data.data.title,
        //     questions: [...res.data.data.questions],
        // };
        // console.log(data);
        setQuiz(res.data.data);
        setState(true);
    };
    useEffect(() => {
        if (Object.keys(props).length !== 0) {
            setQuiz(quizData);
            setState(true);
        } else {
            fetchData();
        }
    }, []);

    return (
        <div>
            {state ? (
                <>
                    <Header quiz={quiz} />
                    <QuizContainer quiz={quiz} />
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default TakeQuizPreview;
