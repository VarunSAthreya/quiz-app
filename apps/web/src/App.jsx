
import React from 'react';
import {
    BrowserRouter as Router,
    // Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import './App.css';
import AdminPageContainer from './admin/Components/Adminpage';


function App() {
    return (




        <div className='App'>
            <AdminPageContainer/>
        </div>
     
    );
}

export default App;