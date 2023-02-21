import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const CreatequizButton = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/quiz/create');
    };

    return (
        <>
            <div className="create-btn-container">
                <Button
                    size="lg"
                    className=""
                    variant="success"
                    onClick={clickHandler}
                >
                    <div className="content">
                        CREATE NEW QUIZ <FaPlus />
                    </div>
                </Button>
            </div>
        </>
    );
};

export default CreatequizButton;
