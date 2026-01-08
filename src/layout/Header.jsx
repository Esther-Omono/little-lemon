import Logo from '../assets/logo.jpg';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <img src={Logo} width={250} alt='Little Lemon Logo' />
      <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MENU</li>
          <li>RESERVATIONS</li>
          <li>ORDER ONLINE</li>
          <li>LOGIN</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
