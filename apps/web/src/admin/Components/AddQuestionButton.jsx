import { Button } from 'react-bootstrap';
import '../styles/admin.css';

const AddQuestionButton = (props) => {
    const { questions, setQuestions } = props;

    const clickHandler = (event) => {
        setQuestions([...questions, { description: '', id: '' }]);
        console.log(questions);
    };

    return (
        <div className="add-btn-container">
            <Button
                variant="primary"
                className="btn-primary"
                onClick={clickHandler}
            >
                ADD QUESTION
            </Button>
        </div>
    );
};

export default AddQuestionButton;
