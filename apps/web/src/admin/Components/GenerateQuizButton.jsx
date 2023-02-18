import Button from 'react-bootstrap/Button';
import axios from 'axios';

const GenerateQuizButton = (props) => {
    const { quizName, questions, adminName, adminEmail, quizDescription } =
        props;
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
            })
            .catch((err) => {
                console.log('Unsuccessful');
            });
    };

    return (
        <div className="generate-quiz-btn-container">
            <div className="option-btn-container">
                <Button className="" variant="success" onClick={clickHandler}>
                    GENERATE QUIZ
                </Button>
            </div>
        </div>
    );
};

export default GenerateQuizButton;
