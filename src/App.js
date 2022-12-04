import './App.css';
import Intro from './Component/Intro';
import NavigationBar from './Component/NavigationBar';
import TrandingGame from './Component/TrandingGame';
import BestGame from './Component/BestGame';
import '../src/style/LandingPage.css'


function App() {
  return (
    <div>
    <div className='myBG'>
      <NavigationBar/>
      <Intro/>
    </div>

    <div className='trending'>
      <TrandingGame/>
    </div>

    <div className='best'>
      <BestGame/>
    </div>


   </div>
  );
}

export default App;
