import React from 'react';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />}></Route>
            </Routes>
          </AppBody>
        </>
    </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;