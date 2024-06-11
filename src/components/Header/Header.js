import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import menuIconBlack from "../../images/menu__icon--black.svg";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Navpanel from "../Navpanel/Navpanel";

function Header(props) {
  // переменна прокрутки страницы
  const [lastPageScrollPosition, setLastPageScrollPosition] = React.useState(0);

  // переменная для определения состояния панели текущей локации пользователя
  const [isHeaderHidden, setIsHeaderHidden] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // узнаем, насколько страница была прокручена ...
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      //... и сравниваем с прошлой позицией до прокрутки
      if (scrollTop < 300) {
        setIsHeaderHidden(false);
      } else if (scrollTop > lastPageScrollPosition) {
        // Прокрутка вниз, скрыть панель локации
        setIsHeaderHidden(true);
      } else {
        // Прокрутка вверх, показать панель локации
        setIsHeaderHidden(false);
      }
      // обновляем переменную прокрутки страницы
      setLastPageScrollPosition(scrollTop);
    };

    // добавим слушатель прокрутки
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastPageScrollPosition]);

  return (
    <header className={`header ${isHeaderHidden && "header_hidden"} ${props.isMainPageOpen && "header_undisplay"}`}>
      <div className="header__title-block">
        <Link className="app-text app-link header__title" to={"/"}>
          {AppText.appTitle}
        </Link>

        <img
          className="app-link header__menu-icon"
          src={menuIconBlack}
          alt={AppText.menuLink}
          onClick={props.openNavbar}
        />

        <Navpanel position="header" />
      </div>
      <hr className="header__horizontal-line"></hr>
        <NavigationLinks imagesData={props.imagesData} isNotFoundPageOpen={props.isNotFoundPageOpen} />
    </header>
  );
};

export default Header;