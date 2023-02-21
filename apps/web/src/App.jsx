import React from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import CreateQuiz from './admin/CreateQuiz';
import AdminPageContainer from './admin/ListQuiz';

function App() {
    // ! TODO: IMPORT THE REQUIRED COMPONENT AND REPLACE HERE
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/quiz" />} />
                <Route path="/quiz" element={<AdminPageContainer />} />
                <Route path="/quiz/create" element={<CreateQuiz />} />
                {/* <Route path="/quiz/:id" element={<TakeQuiz />} /> */}
                {/* <Route path="/quiz/report" element={<AllQuizReport />} /> */}
                {/* <Route path="/quiz/report/:id" element={<QuizReport />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
