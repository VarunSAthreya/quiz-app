import Modal from 'react-bootstrap/Modal';
const QuizSubmit = (props) => {
    const { lgShow, setLgShow } = props;
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
                        Quiz Submitted Successfully !
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your response has been recorded Successfully. You may close
                    the window
                </Modal.Body>
            </Modal>
        </>
    );
};

export default QuizSubmit;
