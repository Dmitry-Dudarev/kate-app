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
import Preloader from '../../images/preloader.gif'

// секция разработки
import { devCommercialList } from '../dev/devCommercialList';
import { devContactsList } from '../dev/devContactsList';


// сделать в меню выпадающее меню со ссылками на галлереи
// проработать возможность наличия в названии подгаллереи подзаголовка
// пусть полоска навигации в шапке уезжает, когда пользователь начинает листать страницу
// проверить верхние паддинги commercial gallery contacts чтобы совпадали и не перекрывались header

// современные телефоны горизонтально не хуже планшетов. Похоже, что надо 768 обдумать. Может, как height а не width

// узнать, есть ли способ позиционировать элементы (верхушки секций) относительно элементов с position: fixed- как  у header, чтобы не приходилось каждый раз пихаться паддингами










function App() {

  const [commercialData, setCommercialData] = React.useState(null);
  // const [worksData, setWorksData] = React.useState(null);
  const [contactsData, setContactsData] = React.useState(null)

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


  const showHeader = !(['/kate-app/'].includes(location.pathname) || ['/kate-app'].includes(location.pathname));
  const showFooter = !(
    ['/kate-app/'].includes(location.pathname) ||
    ['/kate-app'].includes(location.pathname) ||
    ['/contacts'].includes(location.pathname)
  );

  if (!commercialData) {
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
          imagesData={commercialData}
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
                      <Gallery item={item} />
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

          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
