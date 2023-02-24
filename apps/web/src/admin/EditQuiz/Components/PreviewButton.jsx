import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PreviewModal from './PreviewModal';
const PreviewButton = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const { quizName, questions } = props;
    return (
        <>
            {lgShow && (
                <PreviewModal
                    lgShow={lgShow}
                    setLgShow={setLgShow}
                    quizName={quizName}
                    questions={questions}
                />
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
