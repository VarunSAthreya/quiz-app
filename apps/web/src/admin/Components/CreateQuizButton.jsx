import { Button } from 'react-bootstrap';
//import { useNavigate } from "react-router-dom";
import '../styles/admin.css';

const CreatequizButton = () => {
    //const navigate = useNavigate();

    function navigateToCreate() {}

    return (
        <>
            <div className="create-btn-container">
                <Button
                    className=""
                    variant="success"
                    onClick={navigateToCreate}
                >
                    CREATE NEW QUIZ
                </Button>
            </div>
        </>
    );
};

export default CreatequizButton;
