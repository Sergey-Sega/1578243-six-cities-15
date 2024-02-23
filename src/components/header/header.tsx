import { NavBar } from '../nav-bar/nav-bar';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link" href='/'>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </a>
        </div>
        <NavBar/>
      </div>
    </div>
  </header>
);
