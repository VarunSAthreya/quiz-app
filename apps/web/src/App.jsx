import React from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import CreateQuiz from './admin/CreateQuiz';
import EditQuiz from './admin/EditQuiz';
import AdminPageContainer from './admin/ListQuiz';
import TakeQuizPreview from './admin/PreviewQuiz';
import QuizIDSubmission from './admin/QuizReport';
import ShowSubmission from './user/ShowSubmission';
import TakeQuiz from './user/TakeQuiz';

function App() {
    // ! TODO: IMPORT THE REQUIRED COMPONENT AND REPLACE HERE
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/quiz" />} />
                <Route path="/quiz" element={<AdminPageContainer />} />
                <Route path="/create/:id" element={<CreateQuiz />} />
                <Route path="/quiz/:id" element={<TakeQuiz />} />
                <Route path="/submit/:id" element={<ShowSubmission />} />
                <Route path="/preview/:id" element={<TakeQuizPreview />} />
                {/* <Route path="/quiz/report" element={<AllQuizReport />} /> */}
                {/* <Route path="/quiz/report/:id" element={<QuizReport />} /> */}
                <Route path="/submit/quiz/:id" element={<QuizIDSubmission />} />
                <Route path="/edit/:id" element={<EditQuiz />} />
            </Routes>
        </Router>
    );
}

export default App;
