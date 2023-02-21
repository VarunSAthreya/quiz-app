import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const PreviewModal = (props) => {
    const { lgShow, setLgShow } = props;
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
                <Modal.Body>Data</Modal.Body>
            </Modal>
        </>
    );
};

export default PreviewModal;
