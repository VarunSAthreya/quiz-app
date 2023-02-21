import React from 'react';
import CreateQuizButton from './Components/CreateQuizButton';
import QuizCardContainer from './Components/QuizCardContainer';
import './styles/admin.css';

const AdminPageContainer = () => {
    return (
        <div className="adminpage-container">
            <div className="create-btn-class">
                <CreateQuizButton />
            </div>

            <div className="listing-quiz-app">
                <QuizCardContainer />
            </div>
        </div>
    );
};

export default AdminPageContainer;
