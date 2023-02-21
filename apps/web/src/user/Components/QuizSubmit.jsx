import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const QuizSubmit = (props) => {
    const { lgShow, setLgShow, status, setStatus, score, setScore } = props;
    const [loading, setLoading] = useState(true);

    function GrowExample(loadingMessage) {
        return (
            <>
                <Spinner animation="grow" />
                <p>{loadingMessage}</p>
            </>
        );
    }
    if (status) {
        setLoading(false);
    }
    // if (loading) return GrowExample('Loading Quiz !');
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Submitting Quiz !
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your response has been recorded Successfully. Please wait
                    till we calculate your score.
                    <hr />
                    {loading === true ? GrowExample('Loading Score') : ''}
                    {loading === false ? `Your score is : ${score}` : ''}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default QuizSubmit;
