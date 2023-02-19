import { useEffect, useState } from 'react';
import Header from './Header';
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';
import GenerateQuizButton from './GenerateQuizButton';
import AdminDetailsModal from './AdminDetailsModal';
import '../styles/admin.css';

const QuizContainer = () => {
    const [quizName, setQuizName] = useState('');
    const [quesDeleteState, setQuesDeleteState] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [quizDescription, setQuizDescription] = useState('');

    useEffect(() => {
        setQuestions([...questions]);
    }, [quesDeleteState]);

    return (
        <div className="quiz-container">
            <AdminDetailsModal
                adminName={adminName}
                setAdminName={setAdminName}
                adminEmail={adminEmail}
                setAdminEmail={setAdminEmail}
                quizDescription={quizDescription}
                setQuizDescription={setQuizDescription}
            />
            <Header quizName={quizName} setQuizName={setQuizName} />
            {questions.map((ele, ind) => {
                // console.log(questions);
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
            <div className="add-generate-container">
                <AddQuestionButton
                    questions={questions}
                    setQuestions={setQuestions}
                />
                {questions.length > 0 ? (
                    <GenerateQuizButton
                        questions={questions}
                        quizName={quizName}
                        adminName={adminName}
                        adminEmail={adminEmail}
                        quizDescription={quizDescription}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default QuizContainer;
