import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const QuizQuestion = (props) => {
    const { quiz } = props;
    const checkedOption = (question, option) => {
        if (question.isMultiple) {
            if (option.isSelected) {
                option.isSelected = false;
            } else {
                option.isSelected = true;
            }
        } else {
            question.options.map((data) => {
                data.isSelected = false;
            });
            option.isSelected = true;
        }
    };

    const renderCheckbox = (question, index) => {
        return (
            <div className="QnA" key={question.id}>
                <p className="que"> Q:{index + 1} </p>
                <Card border="success" className="questionContainer">
                    {/* <Card.Title> hehe</Card.Title> */}
                    <Card.Body className="question">
                        <Card.Title id="question">{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <p className="questionPoints">Points:{question.points}</p>
                <div className="optionsContainer">
                    <Form>
                        <div key="inline-checkbox" className="mb-3, options">
                            {question.options.map((option, index) => {
                                return (
                                    <Form.Check
                                        key={option.id}
                                        label={option.title}
                                        name={props.question.id}
                                        type="checkbox"
                                        id="inline-radio-1"
                                        onChange={(e) => {
                                            checkedOption(question, option);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </Form>
                </div>
                <hr />
            </div>
        );
    };

    const renderRadio = (question, index) => {
        return (
            <div className="QnA" key={question.id}>
                <p className="que"> Q:{index + 1} </p>
                <Card border="success" className="questionContainer">
                    <Card.Body className="question">
                        <Card.Title id="question">{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <p className="questionPoints">Points:{question.points}</p>
                <div className="optionsContainer">
                    <Form>
                        <div key="inline-radio" className="mb-3, options">
                            {question.options.map((option) => {
                                return (
                                    <Form.Check
                                        key={option.id}
                                        label={option.title}
                                        name={props.question.id}
                                        type="radio"
                                        id="inline-radio-1"
                                        onChange={(e) => {
                                            checkedOption(question, option);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </Form>
                </div>
                <hr />
            </div>
        );
    };

    return (
        <>
            <p className="quizDescription">
                <b> Quiz Description : </b>
                {quiz.description}
            </p>
            <hr />
            {quiz.questions.map((question, index) => {
                return question.isMultiple
                    ? renderCheckbox(question, index)
                    : renderRadio(question, index);
            })}
        </>
    );
};
export default QuizQuestion;
