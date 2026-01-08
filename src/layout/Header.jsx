import { useState } from 'react';
import Logo from '../assets/logo.jpg';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <img src={Logo} width={250} alt='Little Lemon Logo' className='logo' />

      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </button>

      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li onClick={closeMenu}>HOME</li>
          <li onClick={closeMenu}>ABOUT</li>
          <li onClick={closeMenu}>MENU</li>
          <li onClick={closeMenu}>RESERVATIONS</li>
          <li onClick={closeMenu}>ORDER ONLINE</li>
          <li onClick={closeMenu}>LOGIN</li>
        </ul>
      </nav>

      <div
        className={`overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;
