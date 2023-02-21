import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';
import { Prev } from 'react-bootstrap/esm/PageItem';
import Form from 'react-bootstrap/Form';

const QuizQuestion = (props) => {
    const { quiz } = props;
    const [usersAnswer, setusersAnswer] = useState([]);
    let submission = {};
    submission.quizid = quiz.id;
    // console.log('submission', submission);

    const checkedOption = (question, option, index) => {
        console.log(option);
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

        // console.log('Optons after clicked', option);
        // console.log('quiz', quiz);
        // console.log('UsersAnswer:', usersAnswer);
        // console.log('OptionsArray:', usersAnswer[index].answers);
    };
    const renderCheckbox = (question, index) => {
        return (
            <div className="QnA" key={question.id}>
                <Card border="success" style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Title>{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <br />
                <div className="optionsContainer">
                    <Form>
                        <div key="inline-checkbox" className="mb-3">
                            {question.options.map((option) => {
                                return (
                                    <Form.Check
                                        label={option.title}
                                        name="group1"
                                        type="checkbox"
                                        id="inline-checkbox-1"
                                        onChange={(e) => {
                                            checkedOption(
                                                question,
                                                option,
                                                index
                                            );
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
                <Card border="success" style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Title>{question.title}</Card.Title>
                    </Card.Body>
                </Card>
                <br />
                <div className="optionsContainer">
                    <Form>
                        <div key="inline-radio" className="mb-3">
                            {question.options.map((option) => {
                                return (
                                    <Form.Check
                                        label={option.title}
                                        name={props.question.id}
                                        type="radio"
                                        id="inline-radio-1"
                                        onChange={(e) => {
                                            checkedOption(
                                                question,
                                                option,
                                                index
                                            );
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

    return quiz.questions.map((question, index) => {
        return question.isMultiple
            ? renderCheckbox(question, index)
            : renderRadio(question, index);
    });
};
export default QuizQuestion;
