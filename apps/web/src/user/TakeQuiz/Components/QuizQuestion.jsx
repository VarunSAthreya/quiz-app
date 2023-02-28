import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

const QuizQuestion = (props) => {
    const { quiz } = props;
    const [checked, setChecked] = useState(null);
    useEffect(() => {
        setChecked(null);
    }, [checked]);
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
    const clearOption = (target, question) => {
        // console.log(question);
        question.options.map((option) => {
            // console.log(option);
            option.isSelected = setChecked(false);
            return (option.isSelected = target);
        });
    };
    const renderCheckbox = (question, index) => {
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
                        <div key="inline-checkbox" className="mb-3, options">
                            {question.options.map((option, index) => {
                                return (
                                    <Form.Check
                                        key={option.id}
                                        label={option.title}
                                        name={props.question.id}
                                        type="checkbox"
                                        checked={checked}
                                        id={'inline-checkbox-' + option.id}
                                        onChange={(e) => {
                                            checkedOption(question, option);
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div className="clearOption">
                            <Button
                                variant="danger"
                                // className="clearOption"
                                // type="submi"
                                onClick={(e) => {
                                    const target = e.relatedTarget;
                                    clearOption(target, question);
                                }}
                            >
                                Clear Option
                            </Button>
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
                                        checked={checked}
                                        type="radio"
                                        id={'inline-radio-' + option.id}
                                        onChange={(e) => {
                                            checkedOption(question, option);
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div className="clearOption">
                            <Button
                                variant="danger"
                                // className="clearOption"
                                // type="submit"
                                checked={null}
                                onClick={(e) => {
                                    const target = e.relatedTarget;
                                    clearOption(target, question);
                                }}
                                // onClick={clearOption(question)}
                            >
                                Clear Option
                            </Button>
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
