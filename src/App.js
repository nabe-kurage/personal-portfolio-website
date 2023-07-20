import './style/App.css';
import './style/reset.css';
import Navigation from './components/Navigation';
import Mv from './components/Mv';
import Introduction from './components/Introduction';
import CoreValues from './components/CoreValues';
import AboutMore from './components/AboutMore';
import Trajectory from './components/Trajectory';
import Travel from './components/Travel';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Mv />
      <Introduction />
      <CoreValues />
      <AboutMore />
      <Trajectory />
      <Travel />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
