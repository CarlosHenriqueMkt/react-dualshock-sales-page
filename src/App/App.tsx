import * as C from './Styles/App.styles'
import Header from './Pages/NavHeader/Header';
import MainContent from './Pages/Joystick/MainContent';
import Games from './Pages/GamesAPI/Games';
import Discount from './Pages/Form/Discount';
import SocialLinks from './Pages/Footer/SocialLinks';
import NewGames from './Pages/News/NewGames';
import ControllerFeatures from './Pages/Features/ControllerFeatures';

/* 
Problems to solve:
  1. mobile responsivity using Grid
  2. preventDefault isn't working in the form
  3. Include the features component
  4. Include depoiments component
  5.    
*/

const App = () => {
  return (
    <C.Container> {/* Body */}

      <Header /> {/* Navbar with responsivity  */}

      <MainContent /> {/* H1, H2, H3, H4, Joystick and Button */}
      
      <ControllerFeatures />

      <Games /> {/* List of Exclusive Games */}

      <Discount /> {/* Form to take Leads */}

      <NewGames /> {/* List of Articles about New Games */}

      <SocialLinks /> {/* Main Social Media Links */}

    </C.Container>
  );
}

export default App;