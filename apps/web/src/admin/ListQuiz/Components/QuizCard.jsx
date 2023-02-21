import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import '../styles/admin.css';
import CopiedToast from './CopiedToast';

const QuizCardComponent = (props) => {
    const link = `quiz/${props.id}`;
    const [copySuccess, setCopySuccess] = useState('');
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    // your function to copy here
    const navigateToQuiz = () => {
        navigate(link);
    };

    const copyToClipBoard = async (copyMe) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setShowToast(true);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!', err);
        }
    };

    return (
        <div className="quizflexcontainer">
            <div className="quiz-list">
                <div className="quiz-title">
                    Name : sgdhjgdhjgsadhgsadsgsfgsfghshfgshg{props.title}
                </div>
                <div className="total-taken">
                    Total taken : 0{props.quizTaken}
                </div>
                <div className="avg-score">Average : 0{props.avgScore}</div>
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
                        onClick={() => copyToClipBoard(link)}
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
