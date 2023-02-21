import { useEffect, useState } from 'react';

const url =
    'https://raw.githubusercontent.com/VarunSAthreya/quiz-app/main/quiz.json';
const QuizHeading = () => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const [{ title }] = data;
                setTitle([title]);
            })
            .catch((err) => {
                console.log('Error in fetching Quiz Title');
            });
    }, []);
    return (
        <div className="quizTitle">
            <h1>{title}</h1>
        </div>
    );
};

export default QuizHeading;
