import React from "react";
import "./NotFoundPage.css";

function PageNotFound (props) {

  React.useEffect(()=>{
    props.setIsNotFoundPageOpen(true);
    return ()=>props.setIsNotFoundPageOpen(false);
  },[]);

  return(
    <section className="page-not-found">
      <p className="app-text page-not-found__title">404</p>
      <p className="app-text page-not-found__subtitle">Страница не найдена</p>
      <p className="app-text page-not-found__text">Запрашиваемая Вами страница не существует или была перемещена</p>
    </section>
  );
};

export default PageNotFound;