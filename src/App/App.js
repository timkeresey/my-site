import './App.scss';

import Menu from '../components/Menu/Menu';
import SocialBar from '../components/SocialBar/SocialBar';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        HEADER
      </header>
      <div className="hero">
        <div className="hero__text">

        </div>
      </div>
      <div className="menu-container">
        <Menu />
      </div>
      <div className="social-container">
      <SocialBar />
      </div>
      <footer className="footer">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
