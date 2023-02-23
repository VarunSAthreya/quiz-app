import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const QuizQuestion = (props) => {
    const { questions, ind } = props;
    console.log(questions);
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

    const renderCheckbox = (question) => {
        return (
            <div key={question.id} className="QnA">
                <Card border="success" className="questionContainer">
                    <Card.Body>
                        <Card.Title id="question">{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <br />
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

    const renderRadio = (question) => {
        return (
            <div key={question.id} className="QnA">
                <Card border="success" className="questionContainer">
                    <Card.Body>
                        <Card.Title id="question">{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <br />
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

    return questions.map((question) => {
        return (
            <div key={question.id}>
                {question.isMultiple
                    ? renderCheckbox(question)
                    : renderRadio(question)}
            </div>
        );
    });
};
export default QuizQuestion;
