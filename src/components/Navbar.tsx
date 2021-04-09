import './Navbar.css';
import logo from '../images/PortfolioLogo.png';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <a href="/"><img src={logo} alt='kpolikaitis logo' className="logo" /></a>
    <div className="nav_right">
      <a href="/projects">projects</a>
      <a href="/about">about</a>
    </div>
  </nav>
);

export default Navbar;
