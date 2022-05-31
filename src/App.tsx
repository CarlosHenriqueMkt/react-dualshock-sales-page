import * as C from './App.styles'
import Header from './components/NavHeader/Header';
import MainContent from './components/Joystick/MainContent';
import Games from './components/GamesAPI/Games';
import Cupoms from './components/Form/Cupoms';
import SocialLinks from './components/Footer/SocialLinks';


/* Problems to solve: 
   1. Delete the Default body margin (8px);
   2. Create the Exclusive Games Grid responsive;
*/

const App = () => {
  return (
    <C.Container> {/* Body */}

      <Header /> {/* Navbar with responsivity  */}

      <MainContent /> {/* H1, H2, H3, H4, Joystick and Button */}
      
      <Games /> {/* List of Exclusive Games */}

      <Cupoms />

      <SocialLinks />

    </C.Container>
  );
}

export default App;