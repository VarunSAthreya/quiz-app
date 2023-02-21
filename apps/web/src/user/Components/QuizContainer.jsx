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
import { VITE_APP_API_URL } from '../../env';
import SuccessModal from './SuccessModal';
import UnSuccessfulModal from './UnsuccessfulModal';
const url =
    'https://raw.githubusercontent.com/VirajLY/Personal-Portfolio/main/quiz.json';
const QuizContainer = () => {
    const [quiz, setQuiz] = useState({});
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [lgShow, setLgShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [score, setScore] = useState(0);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

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
    const changeUsername = (e) => {
        setUserName(e.target.value);
    };
    const changeEmail = (e) => {
        setEmail(e.target.value);
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
        quiz.username = username;
        quiz.email = email;
        setLgShow(true);
        console.log('quiz is', quiz);
        axios
            .post(`${VITE_APP_API_URL}/submit`, quiz)
            .then((data) => {
                console.log('Submission Successful');
                setStatus(true);
                setScore(data);
            })
            .catch((err) => {
                console.log('Submission Unsuccessful', err);
                setLgShow(false);
                setStatus(false);
                setErrorMessage(err.message);
            });
    };
    function GrowExample(loadingMessage) {
        return (
            <>
                <Spinner animation="grow" />
                <p>{loadingMessage}</p>
            </>
        );
    }
    if (loading) return GrowExample('Loading Quiz !');
    return (
        <>
            {/* {status === true ? (
                <SuccessModal status={status} setStatus={setStatus} />
            ) : (
                ''
            )} */}
            {status === false ? (
                <UnSuccessfulModal
                    message={errorMessage}
                    status={status}
                    setStatus={setStatus}
                />
            ) : (
                ''
            )}

            {lgShow && (
                <QuizSubmit
                    lgShow={lgShow}
                    setLgShow={setLgShow}
                    status={status}
                    setStatus={setStatus}
                    score={score}
                    setScore={setScore}
                />
            )}
            <div className="userInfo">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3, userCredentials">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            {/* <Form.Label>First name</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                placeholder="User Name"
                                value={username}
                                onChange={changeUsername}
                                className="username"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3, userCredentials">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomUsername"
                        >
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="email"
                                value={email}
                                onChange={changeEmail}
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </Form.Group>
                    </Row>
                    {/* <Button type="submit">Submit form</Button> */}
                </Form>
            </div>

            <div className="quizContainer">
                <QuizQuestion
                    question={getCurrentQuestion()}
                    quiz={quiz}
                    ind={index}
                />
            </div>
            <div className="navigateButtons">
                <Button
                    variant="success"
                    className="submitButton"
                    type="submit"
                    onClick={submitQuiz}
                >
                    Submit
                </Button>
            </div>
        </>
    );
};
export default QuizContainer;
