import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import background from './images/LandingBackground.png';
import topographic from './images/Topographic.jpg';
import profilePic from './images/ProfilePic.jpeg';

const App: React.FC = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${topographic})`}}>
      <Navbar />
      <div className="name-title">
        <div className="name">Krista Polikaitis</div>
        <div className="title">software engineer</div>
      </div>

      <div className="profile-picture">
        <img src={profilePic} alt="me!" />
      </div>

      <div>
     
      </div>
      <Footer />
    </div>
  );
}

export default App;
