import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Commercial from '../Commercial/Commercial';
import Footer from '../Footer/Footer';
import { CommercialSamplesList } from '../constants/CommercialSamplesList';
import Gallery from '../Gallery/Gallery';

function App() {
  const location = useLocation();
  // введем переменную языка, к
  // которая будет определять язык страницы
  const [isLanguageRu, setIsLanguageRu] = React.useState(false);
  const changeLanguage = () => {
    setIsLanguageRu(!isLanguageRu);
  };

  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const openNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  };

  // const getImagesList = async function () {
  //   try {
  //     const imagesData = await fetch();
  //     const imagesList = await imagesData.json();
  //     return imagesList;
  //   } catch (err) {
  //     console.err(err);
  //   }
  // }

  const showHeader = !(['/kate-app/'].includes(location.pathname) || ['/kate-app'].includes(location.pathname));
  const showFooter = !(['/kate-app/'].includes(location.pathname) || ['/kate-app'].includes(location.pathname));

  return (
    <div className="app">
      <div className='app-content'>
        {showHeader && <Header
          changeLanguage={changeLanguage}
          openNavbar={openNavbar}
          isNavbarOpen={isNavbarOpen}
        />}
        <main>
          <Routes>
            <Route
              path="/kate-app"
              element={<Main
                isLanguageRu={isLanguageRu}
                openNavbar={openNavbar}
                isNavbarOpen={isNavbarOpen} />}
            />
            <Route path="/commercial" element={<Commercial isLanguageRu={isLanguageRu} />} />
            {
              CommercialSamplesList.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={`/commercial/${item.name}`}
                    element={
                      <Gallery item={item} />
                    }
                  />
                )
              })
            }
          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
