import NavBar from '../../components/NavBar';
import Home from '../../components/Home';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

import { Screen } from './styles';

const MainPage = ({ ToggleTheme }) => {
    return (
        <Screen>
            <NavBar/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Footer/>
        </Screen>
    );
}

export default MainPage;