import * as C from './App.styles'
import Header from './components/NavHeader/Header';
import MainContent from './components/Joystick/MainContent';
import Games from './components/GamesAPI/Games';
import Discount from './components/Form/Discount';
import SocialLinks from './components/Footer/SocialLinks';
import NewGames from './components/News/NewGames';

const App = () => {
  return (
    <C.Container> {/* Body */}

      <Header /> {/* Navbar with responsivity  */}

      <MainContent /> {/* H1, H2, H3, H4, Joystick and Button */}
      
      <Games /> {/* List of Exclusive Games */}

      <Discount /> {/* Form to take Leads */}

      <NewGames /> {/* List of Articles about New Games */}

      <SocialLinks /> {/* Main Social Media Links */}

    </C.Container>
  );
}

export default App;