import axios from 'axios';
import QuizCardComponent from './QuizCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Quizcardcontaier = () => {
    const [quizzes, setQuizzes] = useState(null);
    const fetchQuizzes = () => {
        const getQuizzes = async () => {
            try {
                const quizzes = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setQuizzes(quizzes);
                console.log(quizzes);
                console.log(quizzes.data);
            } catch (err) {
                console.log(err);
            }
        };
        getQuizzes();
    };

    useEffect(fetchQuizzes, []);

    return (
        <div className="listing-quiz">
            <div className="listing-heading">
                <h1>Quizzes</h1>
            </div>

            <div className="quizzes">
                {quizzes !== null &&
                    quizzes.data.map((variant1) => (
                        <QuizCardComponent
                            key={variant1.id}
                            className="quiz-listcomponent"
                            // paas the whole object as a prop here
                            data={quizzes.data}
                        ></QuizCardComponent>
                    ))}
            </div>
        </div>
    );
};

export default Quizcardcontaier;
