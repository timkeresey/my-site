import './App.scss';

import Menu from '../components/Menu/Menu';
import SocialBar from '../components/SocialBar/SocialBar';

import headshot from '../assets/images/cartoon.png';
import logo from '../assets/images/logo.png';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img className="header__logo" src={logo} alt="Tim Keresey logo" />
      </header>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text--title">TIM KERESEY</h1>
          <h2 className="hero__text--title2">Front End Developer</h2>
          <p className="hero__text--body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img className="hero__img" src={headshot} alt="Tim Keresey" />
      </div>
      <div className="menu-container">
        <Menu />
      </div>
      <div className="social-container">
        <SocialBar />
      </div>
      <div className="about">
        
      </div>
      <div className="work">

      </div>
      <footer className="footer">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
