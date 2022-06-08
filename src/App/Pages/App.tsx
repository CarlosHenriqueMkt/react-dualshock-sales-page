import * as C from "../Styles/App.styles";
import Header from "../Shared/Components/NavHeader/Header";
import MainContent from "../Shared/Components/Joystick/MainContent";
import Games from "../Shared/Components/GamesAPI/Games";
import Discount from "../Shared/Components/Form/Discount";
import SocialLinks from "../Shared/Components/Footer/SocialLinks";
import NewGames from "../Shared/Components/News/NewGames";
import ControllerFeatures from "../Shared/Features/ControllerFeatures";

/* 
Problems to solve:
  1. preventDefault isn't working in the form
  2. Include depoiments component 
  3. Animations appear with the scroll  
*/

const App = () => {
	return (
		<C.Container>
			{" "}
			{/* Body */}
			<Header /> {/* Navbar with responsivity  */}
			<MainContent /> {/* H1, H2, H3, H4, Joystick and Button */}
			<ControllerFeatures />
			<Games /> {/* List of Exclusive Games */}
			<Discount /> {/* Form to take Leads */}
			<NewGames /> {/* List of Articles about New Games */}
			<SocialLinks /> {/* Main Social Media Links */}
		</C.Container>
	);
};

export default App;
