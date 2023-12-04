import React from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className='app-content'>
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<Main />} /> */}
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;
