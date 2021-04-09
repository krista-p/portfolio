import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import background from './images/LandingBackground.png';
import profilePic from './images/ProfilePic.jpeg';

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})`}}>
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
