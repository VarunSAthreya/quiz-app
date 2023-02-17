import { useEffect, useState } from 'react';
import Header from './Header';
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';
import '../styles/admin.css';

const QuizContainer = () => {
    const [quizName, setQuizName] = useState('');
    const [quesDeleteState, setQuesDeleteState] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions([...questions]);
        console.log(questions);
        console.log('CHANGED');
    }, [quesDeleteState]);

    return (
        <div className="quiz-container">
            <Header quizName={quizName} setQuizName={setQuizName} />
            {questions.map((ele, ind) => {
                console.log(questions);
                return (
                    <QuestionContainer
                        key={ind}
                        ind={ind}
                        data={ele}
                        questions={questions}
                        setQuestions={setQuestions}
                        quesDeleteState={quesDeleteState}
                        setQuesDeleteState={setQuesDeleteState}
                    />
                );
            })}
            <AddQuestionButton
                questions={questions}
                setQuestions={setQuestions}
            />
        </div>
    );
};

export default QuizContainer;
