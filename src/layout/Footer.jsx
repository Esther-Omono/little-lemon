import '../styles/footer.css';
import footerImage from '../assets/footer-image.png';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <img className='footer-logo' src={footerImage} alt='Little Lemon' />
        <div className='footer-nav'>
          <h4>Sitemap</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h4>Contact us</h4>
          <div>
            <FaLocationDot size={20} />
            <p>678 Pisa Ave, Chicago, IL 60611</p>
          </div>

          <div>
            <FaPhoneAlt size={20} />
            <p>(312) 593-2744</p>
          </div>

          <div>
            <MdEmail size={20} />
            <p>info@littlelemon.com</p>
          </div>
        </div>
        <div className='footer-socials'>
          <h4>Connect with us</h4>

          <FaFacebook size={25} className='icon' />
          <FaTwitter size={25} className='icon' />
          <FaInstagram size={25} className='icon' />
          <FaYoutube size={25} className='icon' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
