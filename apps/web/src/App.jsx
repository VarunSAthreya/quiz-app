import React from 'react';
import {
    BrowserRouter as Router,
    // Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import CreateQuiz from './admin/CreateQuiz';
import EditQuiz from './admin/EditQuiz';
import AdminPageContainer from './admin/ListQuiz/Components/Adminpage';
import ShowSubmission from './user/ShowSubmission';
import TakeQuiz from './user/TakeQuiz';
import ShowScore from './user/TakeQuiz/Components/ShowScore';

function App() {
    // ! TODO: IMPORT THE REQUIRED COMPONENT AND REPLACE HERE
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Navigate replace to="/quiz" />} /> */}
                <Route path="/quiz" element={<AdminPageContainer />} />
                <Route path="/quiz/create" element={<CreateQuiz />} />
                <Route path="/quiz/:id" element={<TakeQuiz />} />
                <Route path="/submit/:id" element={<ShowSubmission />} />

                {/* <Route path="/quiz/report" element={<AllQuizReport />} /> */}
                {/* <Route path="/quiz/report/:id" element={<QuizReport />} /> */}
                <Route path="/" element={<ShowScore />} />
                <Route path="/edit/:id" element={<EditQuiz />} />
            </Routes>
        </Router>
    );
}

export default App;
