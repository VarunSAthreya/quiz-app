import { useEffect, useState } from 'react';
import AddQuestionButton from './Components/AddQuestionButton';
import AdminDetailsModal from './Components/AdminDetailsModal';
import GenerateQuizButton from './Components/GenerateQuizButton';
import Header from './Components/Header';
import QuestionContainer from './Components/QuestionContainer';
import PreviewButton from './Components/PreviewButton';
import './styles/admin.css';
import { VITE_APP_API_URL } from '../../env';
import axios from 'axios';

const EditQuiz = () => {
    const [quizData, setQuizData] = useState({});
    const [quizName, setQuizName] = useState('');
    const [quesDeleteState, setQuesDeleteState] = useState(0);
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const res = await axios.get(`${VITE_APP_API_URL}/quiz`);
        console.log(res.data.data[1]);
        setQuizData(res.data.data[1]);

        console.log([...res.data.data[1].questions]);
        setQuestions([...res.data.data[1].questions]);

        console.log(res.data.data[1].title);
        setQuizName(res.data.data[1].title);
    };
    useEffect(() => {
        fetchQuestions();
    }, []);

    useEffect(() => {
        setQuestions([...questions]);
    }, [quesDeleteState]);

    return (
        <div className="quiz-container">
            <Header quizName={quizName} setQuizName={setQuizName} />
            {questions.map((ele, ind) => {
                console.log(questions);
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
                            quizData={quizData}
                            setQuizData={setQuizData}
                            questions={questions}
                            quizName={quizName}
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

export default EditQuiz;
