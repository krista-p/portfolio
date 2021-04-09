import './AboutPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaSnowboarding, FaMountain, FaHiking, FaRunning } from 'react-icons/fa';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const AboutPage: React.FC = () => {

return (
   <div className="detail-page" id="scroll">
      <Navbar />

      <div className="about">

         <div className="about-container">
            <div className="about-text">
               <div className="about-title">hey, i'm krista!</div>
               <div>
                  <p>
                     I'm a Fullstack Software Engineer living outside of the Chicago area and
                     recently made the career switch from Mechanical Engineering 
                     to Software Engineering in order to continue to build on my engineering skills.
                  </p>
               </div>

               <div className="list">
                  <p>
                     When I'm not in the office, you would most likely find me:
                  </p>
                  <ul>
                     <li>Climbing a mountain <span className="icons"><FaMountain /></span></li>
                     <li>Backpacking in the wilderness <span className="icons"><FaHiking /></span></li>
                     <li>Running on a trail <span className="icons"><FaRunning /></span></li>
                     <li>Frolicking in the snow <span className="icons"><FaSnowboarding /></span></li>
                  </ul>
               </div>

               <div className="contact-me">
                  <a href="https://www.linkedin.com/in/krista-polikaitis/" target="_blank" rel="noreferrer">
                     <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/krista-p" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                  <a href = "mailto: kristabrak31@gmail.com"><MdEmail /></a>
               </div>
            </div>

         </div>
      </div>

      <Footer />
   </div> 
)};

export default AboutPage;
