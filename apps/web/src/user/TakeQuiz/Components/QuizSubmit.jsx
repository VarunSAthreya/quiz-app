import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Loading } from './Loading';
const QuizSubmit = (props) => {
    const { lgShow, setLgShow, status, setStatus, score, setScore } = props;
    const [loading, setLoading] = useState(true);

    if (status) {
        setLoading(false);
    }

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
                    {loading === true && (
                        <Loading message={'Submitting Quiz!'} />
                    )}
                    {loading === false && `Your score is : ${score}`}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default QuizSubmit;