import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import '../styles/admin.css';
import CopiedToast from './CopiedToast';

const QuizCardComponent = ({ quiz }) => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    // your function to copy here
    const navigateToQuiz = () => {
        navigate(`/quiz/${quiz.id}`);
    };

    const copyToClipBoard = async (id) => {
        try {
            await navigator.clipboard.writeText(
                `${window.location.host}/quiz/${id}`
            );
            setShowToast(true);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="quizflexcontainer">
            <div className="quiz-list">
                <div className="quiz-title">{quiz.title}</div>
                <div className="total-taken">
                    Total taken : {quiz.quizTaken}
                </div>
                <div className="avg-score">
                    Average : {quiz.avgScore} / {quiz.totalPoints}
                </div>
                <div className="copylink">
                    {showToast && (
                        <CopiedToast
                            showToast={showToast}
                            setShowToast={setShowToast}
                        />
                    )}

                    <Button
                        variant="outline-light"
                        className="copyquizbutton"
                        onClick={() => copyToClipBoard(quiz.id)}
                    >
                        Copy
                    </Button>
                </div>
                <div className="play-quiz-btn-container">
                    <Button
                        variant="outline-light"
                        className="play-quiz-btn"
                        onClick={navigateToQuiz}
                    >
                        Play
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuizCardComponent;
