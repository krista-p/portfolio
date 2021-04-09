import './Footer.css';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => (
  <footer>
    <div className="details-footer">
       © 2021 | Designed by Krista Polikaitis | 
      <a href="https://www.linkedin.com/in/krista-polikaitis/" target="_blank" rel="noreferrer" className="icon">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/krista-p" target="_blank" rel="noreferrer" className="icon"><AiFillGithub /></a>
      <a href = "mailto: kristabrak31@gmail.com" className="icon"><MdEmail /></a>
    </div>
  </footer>
);

export default Footer;
