import React from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();

  const showHeader = !['/kate-app/'].includes(location.pathname);
  const showFooter = !['/kate-app/'].includes(location.pathname);

  return (
    <div className="app">
      <div className='app-content'>
        {showHeader && <Header />}
        <main>
          <Routes>
            <Route path="/kate-app" element={<Main />} />
          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
