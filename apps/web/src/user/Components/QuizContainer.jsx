import QuizQuestion from './QuizQuestion';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import QuizSubmit from './QuizSubmit';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

`/quiz/:id`;
const url =
    'https://raw.githubusercontent.com/VirajLY/Personal-Portfolio/main/quiz.json';
const QuizContainer = () => {
    const [quiz, setQuiz] = useState({});
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [lgShow, setLgShow] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((json) => json.json())
            .then((data) => {
                setQuiz(data[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    }, []);

    const previousQuestion = () => {
        setIndex(index - 1);
    };
    const nextQuestion = () => {
        setIndex(index + 1);
    };

    const getCurrentQuestion = () => {
        const { questions } = quiz;
        return questions[index];
    };
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const submitQuiz = () => {
        setLgShow(true);
        axios.post();
    };
    function GrowExample(comp) {
        return (
            <>
                <Spinner animation="grow" />
                <p>{comp}</p>
            </>
        );
    }
    if (loading) return GrowExample('Loading Quiz !');
    return (
        <>
            {lgShow && <QuizSubmit lgShow={lgShow} setLgShow={setLgShow} />}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        {/* <Form.Label>Email</Form.Label>  */}
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter mail-id"
                        />
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Form>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        {/* <Form.Label>First name</Form.Label> */}
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Name"
                        />
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Form>
            <div className="quizContainer">
                <QuizQuestion
                    question={getCurrentQuestion()}
                    quiz={quiz}
                    ind={index}
                />
            </div>
            <div className="navigateButtons">
                {/* {index !== 0 && (
                    <Button variant="primary" onClick={previousQuestion}>
                        Previous Question
                    </Button>
                )} */}
                <Button
                    variant="success"
                    className="submitButton"
                    type="submit"
                    onClick={(submitQuiz, handleSubmit)}
                >
                    Submit
                </Button>
            </div>
        </>
    );
};
export default QuizContainer;
