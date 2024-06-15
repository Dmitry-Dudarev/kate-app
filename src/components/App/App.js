import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Commercial from '../Commercial/Commercial';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';
import Contacts from '../Contacts/Contacts';
import BlurOverlay from '../BlurOverlay/BlurOverlay';
import PopupWithPhoto from '../PopupWithPhoto/PopupWithPhoto';
import PageNotFound from '../NotFoundPage/NotFoundPage';
import Preloader from '../Preloader/Preloader';

// секция разработки
import { devCommercialList } from '../dev/devCommercialList';
import { devContactsList } from '../dev/devContactsList';

// сделать в меню выпадающее меню со ссылками на галлереи
// пусть горизонтальные фотки, если их несколько, отображаются по 2
// нам не нужен существущий класс app-section
// разгрести Cards

function App() {
  const [commercialData, setCommercialData] = React.useState([]);
  // const [worksData, setWorksData] = React.useState(null);
  const [contactsData, setContactsData] = React.useState(null)

  const location = useLocation();
  // введем переменную языка, к
  // которая будет определять язык страницы
  const [isLanguageRu, setIsLanguageRu] = React.useState(false);
  const changeLanguage = () => {
    setIsLanguageRu(!isLanguageRu);
  };

  //переменная для показа навигационной вкладки
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const openNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  };

  // переменная состояния попапа с фото
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupPhotoData, setPopupPhotoData] = React.useState({ url: "", alt: "", photos: [] });
  const openPopup = (photoData) => {
    setPopupPhotoData(photoData);
    setIsPopupOpen(true);
  }
  const closePopup = () => {
    setIsPopupOpen(false);
  }

  // будем скрывать navlinks в header
  const [isNotFoundPageOpen, setIsNotFoundPageOpen] = React.useState(false);

  // будем скрывать header и footer
  const [isMainPageOpen, setIsMainPageOpen] = React.useState(false);

  // для разработки
  const getData = async function () {
    try {
      const dataJSONCommercial = await JSON.stringify(devCommercialList);
      const dataJSONContacts = await JSON.stringify(devContactsList);
      const dataCommercial = await JSON.parse(dataJSONCommercial);
      const dataContacts = await JSON.parse(dataJSONContacts);

      setCommercialData(dataCommercial);
      setContactsData(dataContacts);
    } catch (err) {
      console.log(err);
    }
  }

  // получаем данные при старте страницы
  React.useEffect(() => {
    getData();
  }, []);

  const showFooter = !['/contacts'].includes(location.pathname);

  if (!commercialData) {
    return(
      <Preloader position={'app'} />
    )
  }

  return (
    <div className="app">
      <div className='app-content'>
        <Header
          changeLanguage={changeLanguage}
          openNavbar={openNavbar}
          isNavbarOpen={isNavbarOpen}
          imagesData={commercialData}
          isNotFoundPageOpen={isNotFoundPageOpen}
          isMainPageOpen={isMainPageOpen}
        />
        <main>
          <Navbar openNavbar={openNavbar} isNavbarOpen={isNavbarOpen} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLanguageRu={isLanguageRu}
                  openNavbar={openNavbar}
                  isNavbarOpen={isNavbarOpen}
                  setIsMainPageOpen={setIsMainPageOpen}
                />
              }
            />

            <Route
              path="/commercial"
              element={
                <Commercial
                  isLanguageRu={isLanguageRu}
                  imagesData={commercialData}
                />
              }
            />

            {
              commercialData.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={`/commercial/${item.name}`}
                    element={
                      <Gallery item={item} openPopup={openPopup} />
                    }
                  />
                )
              })
            }

            <Route
              path="/contacts"
              element={
                <Contacts
                  isLanguageRu={isLanguageRu}
                  contactsData={contactsData}
                />
              }
            />

            <Route
              path="/*"
              element={
                <PageNotFound setIsNotFoundPageOpen={setIsNotFoundPageOpen} />
              }
            />

          </Routes>
        </main>
        {showFooter && <Footer isMainPageOpen={isMainPageOpen} />}
        <BlurOverlay
          isNavbarOpen={isNavbarOpen}
          isPopupOpen={isPopupOpen}
        />

        {isPopupOpen &&
          <PopupWithPhoto
            popupPhotoData={popupPhotoData}
            closePopup={closePopup}
          />
        }

      </div>
    </div>
  );
}

export default App;
