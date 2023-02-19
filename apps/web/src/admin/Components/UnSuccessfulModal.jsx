import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UnSuccessfulModal = (props) => {
    const { successStatus, setSuccessStatus } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        //reset status
        setSuccessStatus('');
        setShow(false);
    };
    const handleShow = () => setShow(true);

    useEffect(handleShow, []);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Error Occured!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Quiz creation unsuccessful, Please try again!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UnSuccessfulModal;
