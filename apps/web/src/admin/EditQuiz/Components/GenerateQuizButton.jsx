import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SuccessModal from './SuccessModal';
import UnSuccessfulModal from './UnSuccessfulModal';

const GenerateQuizButton = (props) => {
    const { quizName, questions, quizData, setQuizData } = props;
    const [successStatus, setSuccessStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const clickHandler = () => {
        const data = {
            ...quizData,
        };
        data.title = quizName;
        data.questions = [...questions];

        setQuizData(data);
        console.log(data);

        // axios
        //     .post(`${VITE_APP_API_URL}/quiz`, quizData)
        //     .then(() => {
        //         console.log('Successful');
        //         setSuccessStatus(true);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         console.log('Unsuccessful', err);
        //         setErrorMessage(err.response.data.message);
        //         setSuccessStatus(false);
        //     });
    };

    return (
        <div className="generate-quiz-btn-container">
            <div className="option-btn-container">
                <Button className="" variant="success" onClick={clickHandler}>
                    GENERATE QUIZ
                </Button>
                {successStatus === true ? (
                    <SuccessModal
                        successStatus={successStatus}
                        setSuccessStatus={setSuccessStatus}
                    />
                ) : (
                    ''
                )}
                {successStatus === false ? (
                    <UnSuccessfulModal
                        message={errorMessage}
                        successStatus={successStatus}
                        setSuccessStatus={setSuccessStatus}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default GenerateQuizButton;
