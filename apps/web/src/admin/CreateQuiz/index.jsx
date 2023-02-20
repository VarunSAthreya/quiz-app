import { useEffect, useState } from 'react';
import AddQuestionButton from './Components/AddQuestionButton';
import AdminDetailsModal from './Components/AdminDetailsModal';
import GenerateQuizButton from './Components/GenerateQuizButton';
import Header from './Components/Header';
import QuestionContainer from './Components/QuestionContainer';
import PreviewButton from './Components/PreviewButton';
import './styles/admin.css';

const CreateQuiz = () => {
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
                return (
                    <QuestionContainer
                        key={`question-${ind}`}
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
                    <>
                        <GenerateQuizButton
                            questions={questions}
                            quizName={quizName}
                            adminName={adminName}
                            adminEmail={adminEmail}
                            quizDescription={quizDescription}
                        />
                        <PreviewButton />
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default CreateQuiz;
