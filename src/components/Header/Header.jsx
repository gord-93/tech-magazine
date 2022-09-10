import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <p className="logo logo_place_header">Logo</p>
      <div className="header__links">
        <p to="/main" className="header__link">Главная</p>
        <p to="/top" className="header__link">Топ</p>
        <p to="/reviews" className="header__link">Обзоры</p>
        <p to="/news" className="header__link">Новости</p>
      </div>
      <div className="header__profile">
        <img className="header__avatar" src="*" alt="*" />
        <p className="header__username">admin</p>
      </div>
    </header>
  )
}

export default Header;