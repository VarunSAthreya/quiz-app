import { useState } from 'react';
import Header from './Header';
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';
import '../styles/admin.css';

const QuizContainer = () => {
    const [quizName, setQuizName] = useState('');
    const [questions, setQuestions] = useState([]);

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
