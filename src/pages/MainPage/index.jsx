import NavBar from '../../components/NavBar';
import Home from '../../components/Home';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

import { Screen } from './styles';

const MainPage = ({ ToggleTheme }) => {
    return (
        <Screen>
            <NavBar/>
            <Home/>
            <Projects/>
            <Skills/>
        </Screen>
    );
}

export default MainPage;