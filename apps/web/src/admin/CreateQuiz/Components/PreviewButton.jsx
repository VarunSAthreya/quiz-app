import { Button } from 'react-bootstrap';
import { useState } from 'react';
import PreviewModal from './PreviewModal';
const PreviewButton = () => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            {lgShow ? (
                <PreviewModal lgShow={lgShow} setLgShow={setLgShow} />
            ) : (
                ''
            )}
            <Button
                className="preview-btn-container"
                variant="dark"
                onClick={() => setLgShow(true)}
            >
                QUIZ PREVIEW
            </Button>
        </>
    );
};

export default PreviewButton;
