import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { VITE_APP_API_URL } from '../../../env';
import QuizQuestion from './QuizQuestion';

const QuizContainer = ({ quiz }) => {
    const [index, setIndex] = useState(0);
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState(null);

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
    const confirmSubmit = () => {
        setConfirmShow(true);
    };
    // const submitQuiz = () => {
    //     const payload = {
    //         quiz,
    //         username,
    //         email,
    //     };
    //     console.log('payload is', payload);
    //     axios
    //         .post(`${VITE_APP_API_URL}/quiz/submit`, payload)
    //         .then((data) => {
    //             console.log('Submission Successful');
    //             console.log(data.data.data.id);
    //             setStatus(true);
    //             navigate(`/submit/${data.data.data.id}`);
    //         })
    //         .catch((err) => {
    //             console.log('Submission Unsuccessful', err);
    //             // setLgShow(false);
    //             setStatus(false);
    //             setErrorMessage(err.message);
    //         });
    // };

    return (
        <>
            {status === false && (
                <UnSuccessfulModal
                    message={errorMessage}
                    status={status}
                    setStatus={setStatus}
                />
            )}
            {confirmShow && (
                <ConfirmModal
                    confirmShow={confirmShow}
                    setConfirmShow={setConfirmShow}
                    status={status}
                    setStatus={setStatus}
                    score={score}
                    setScore={setScore}
                    quiz={quiz}
                    username={username}
                    email={email}
                    message={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            )}
            {/* {lgShow && (
                <QuizSubmit
                    lgShow={lgShow}
                    setLgShow={setLgShow}
                    status={status}
                    setStatus={setStatus}
                    score={score}
                    setScore={setScore}
                />
            )} */}
            <div className="userInfo">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3, userCredentials">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            {/* <Form.Label>User name</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                placeholder="User Name"
                                value={username}
                                onChange={changeUsername}
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
                    onClick={confirmSubmit}
                >
                    Submit
                </Button>
            </div>
        </>
    );
};
export default QuizContainer;
