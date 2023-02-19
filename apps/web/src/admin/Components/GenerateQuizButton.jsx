import Button from 'react-bootstrap/Button';
import axios from 'axios';
import SuccessModal from './SuccessModal';
import UnSuccessfulModal from './UnSuccessfulModal';
import { useState } from 'react';

const GenerateQuizButton = (props) => {
    const { quizName, questions, adminName, adminEmail, quizDescription } =
        props;
    const [successStatus, setSuccessStatus] = useState(null);
    const clickHandler = () => {
        const data = {
            title: quizName,
            username: adminName,
            email: adminEmail,
            description: quizDescription,
            questions: [...questions],
        };

        console.log(data);
        axios
            .post('/quiz', data)
            .then(() => {
                console.log('Successfull');
                setSuccessStatus(true);
            })
            .catch((err) => {
                console.log('Unsuccessful', err);
                setSuccessStatus(false);
            });
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
