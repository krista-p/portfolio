import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <App />} />
        <Route path="/projects" component={() => <ProjectsPage />} />
        <Route path="/skills" component={() => <SkillsPage />} />
        <Route path="/about" component={() => <AboutPage />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
