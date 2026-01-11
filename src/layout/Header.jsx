import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
        <img src={Logo} width={250} alt='Little Lemon Logo' className='logo' />
      </Link>

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
          <li onClick={closeMenu}>
            <Link to='/'>HOME</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/menu'>MENU</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/reservations'>RESERVATIONS</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/order-online'>ORDER ONLINE</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/login'>LOGIN</Link>
          </li>
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
