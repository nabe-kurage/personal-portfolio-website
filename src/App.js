import './style/App.css';
import './style/reset.css';
import Navigation from './components/Navigation';
import Mv from './components/Mv';
import Introduction from './components/Introduction';
import News from './components/News';
import Works from './components/Works';
import Profile from './components/Profile';
import AboutMore from './components/AboutMore';
// import Travel from './components/Travel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Mv />
      <Introduction />
      <News />
      <Works />
      <Profile />
      <AboutMore />
      {/* <Travel />　*/}
      <Footer />
    </div>
  );
}

export default App;
