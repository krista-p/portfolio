import Footer from './Footer';
import Navbar from './Navbar';
import AboutMe from '../images/AboutMe.jpeg';
import Mountain from '../images/Mountain.jpeg';
import { FaSnowboarding, FaMountain, FaHiking, FaRunning } from 'react-icons/fa';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const AboutPage: React.FC = () => {

const handleHoverEvent = (e: any) => {
   console.log(e.target)
}

return (
   <div className="detail-page">
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
                     <li id="mountain" onMouseEnter={handleHoverEvent}>Climbing a mountain <FaMountain /></li>
                     <li id="backpacking">Backpacking in the wilderness <FaHiking /></li>
                     <li id="running">Running on a trail <FaRunning /></li>
                     <li id="skiing">Frolicking in the snow <FaSnowboarding /></li>
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
