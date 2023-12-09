import React from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();
    // введем переменную языка, к
    // которая будет определять язык страницы
  const [isLanguageRu, setIsLanguageRu] = React.useState(false);
  const changeLanguage = () => {
    setIsLanguageRu(!isLanguageRu);
  };

  const showHeader = !['/kate-app'].includes(location.pathname);
  const showFooter = !['/kate-app'].includes(location.pathname);

  return (
    <div className="app">
      <div className='app-content'>
        {showHeader && <Header changeLanguage={changeLanguage} />}
        <main>
          <Routes>
            <Route path="/kate-app" element={<Main isLanguageRu={isLanguageRu} />} />
          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
