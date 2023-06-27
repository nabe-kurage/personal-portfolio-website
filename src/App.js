import './style/App.css';
import './style/reset.css';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Goal from './components/Goal';
import Concept from './components/Concept';
import Trajectory from './components/Trajectory';
import Travel from './components/Travel';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Introduction />
      <Goal />
      <Concept />
      <Trajectory />
      <Travel />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
