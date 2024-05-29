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
import Navbar from '../Navbar/Navbar';
import Preloader from '../../images/preloader.gif'

// секция разработки
import { devCommercialList } from '../dev/devCommercialList';
import { devContactsList } from '../dev/devContactsList';

function App() {

  const [appData, setAppData] = React.useState(null);

  let dataApp = null;
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

  // переменная для полученных с сервера данных
  // после того как получение будет завершено
  // и данные будут преобразованы

  // для разработки
  const getData = async function () {
    try {
      const dataJSONCommercial = await JSON.stringify(devCommercialList);
      const dataJSONContacts = await JSON.stringify(devContactsList);
      const dataCommercial = await JSON.parse(dataJSONCommercial);
      const dataContacts = await JSON.parse(dataJSONContacts);

      setAppData(dataCommercial)

    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {

    getData();
  }, []);


  const showHeader = !(['/kate-app/'].includes(location.pathname) || ['/kate-app'].includes(location.pathname));
  const showFooter = !(['/kate-app/'].includes(location.pathname) || ['/kate-app'].includes(location.pathname));

  if (!appData) {
    return (
      <div className='app__preloader'>
        <p className='app-text app__preloader-text'>Loading...</p>
        <img className='app__preloader-animation' src={Preloader} alt='preloader'></img>
      </div>
    )
  }

  return (
    <div className="app">
      <div className='app-content'>
        {showHeader && <Header
          changeLanguage={changeLanguage}
          openNavbar={openNavbar}
          isNavbarOpen={isNavbarOpen}
          imagesData={appData}
        />}
        <main>
          <Navbar openNavbar={openNavbar} isNavbarOpen={isNavbarOpen} />

          <Routes>
            <Route
              path="/kate-app"
              element={
                <Main
                  isLanguageRu={isLanguageRu}
                  openNavbar={openNavbar}
                  isNavbarOpen={isNavbarOpen} />
              }
            />

            <Route
              path="/commercial"
              element={
                <Commercial
                  isLanguageRu={isLanguageRu}
                  imagesData={appData}
                />
              }
            />

            {
              appData.map((item, index) => {
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
