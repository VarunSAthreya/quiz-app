import { useState } from 'react';
import AddOptionButton from './AddOptionButton';
import OptionContainer from './OptionContainer';
import Form from 'react-bootstrap/Form';

const QuestionContainer = (props) => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [options, setOptions] = useState([]);
    const changeHandlerTitle = (val) => {
        setQuestionTitle(val);
        props.questions[props.ind].title = val;
        props.setQuestions([...props.questions]);
    };
    return (
        <Form className="question-container">
            <Form.Group
                className="mb-3 ms-3 me-3 mt-3"
                controlId="question-title"
            >
                <Form.Label>Question {props.ind + 1}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(event) => changeHandlerTitle(event.target.value)}
                    value={questionTitle}
                />
            </Form.Group>
            <AddOptionButton
                options={options}
                setOptions={setOptions}
                questions={props.questions}
                setQuestions={props.setQuestions}
                quesIndex={props.ind}
            />
            {options.map((ele, i) => {
                return (
                    <OptionContainer
                        i={i}
                        key={i}
                        questions={props.questions}
                        setQuestions={props.setQuestions}
                        options={options}
                        setOptions={setOptions}
                        quesIndex={props.ind}
                        ele={ele}
                    />
                );
            })}
        </Form>
    );
};

export default QuestionContainer;
