import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import TakeQuizPreview from '../../PreviewQuiz';

const PreviewModal = (props) => {
    const { lgShow, setLgShow, quizData } = props;
    useEffect(() => {
        setLgShow(true);
    }, []);
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
                        Quiz Preview
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TakeQuizPreview quizData={quizData} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PreviewModal;
