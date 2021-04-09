import Footer from './Footer';
import Navbar from './Navbar';
import ProjectContainer from './ProjectPage/ProjectContainer';
import { trekker, banana, portfolio } from '../lib/projects';

const ProjectsPage = () => (
 <div className="detail-page">
    <Navbar />
    <div className="project-list">
       <ProjectContainer project={trekker} />
       <ProjectContainer project={banana} />
       <ProjectContainer project={portfolio} />
    </div>
    <Footer />
 </div> 
);

export default ProjectsPage;
