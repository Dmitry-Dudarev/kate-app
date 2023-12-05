import React from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();

  const showHeader = !['/'].includes(location.pathname);
  const showFooter = !['/'].includes(location.pathname);

  return (
    <div className="app">
      <div className='app-content'>
        {showHeader && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
