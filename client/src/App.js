import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from './components/AuthPage';
import FileUploadPage from './components/FileUploadPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path="/" element={<MainPage/>} exact/>
            <Route path="/auth" element={<AuthPage />} exact/>
            <Route path="/file" element={<FileUploadPage/>} exact/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
