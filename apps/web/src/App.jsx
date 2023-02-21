import React from 'react';
import {
    BrowserRouter as Router,
    // Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import AdminPageContainer from './admin/ListQuiz/Components/Adminpage';
import CreateQuiz from './admin/CreateQuiz';
import ShowScore from './user/Components/ShowScore';

function App() {
    // ! TODO: IMPORT THE REQUIRED COMPONENT AND REPLACE HERE
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Navigate replace to="/quiz" />} /> */}
                <Route path="/quiz" element={<AdminPageContainer />} />
                <Route path="/quiz/create" element={<CreateQuiz />} />
                {/* <Route path="/quiz/:id" element={<TakeQuiz />} /> */}
                {/* <Route path="/quiz/report" element={<AllQuizReport />} /> */}
                {/* <Route path="/quiz/report/:id" element={<QuizReport />} /> */}
                <Route path="/" element={<ShowScore />} />
            </Routes>
        </Router>
    );
}

export default App;
