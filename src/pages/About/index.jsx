import NavBar from '../../components/NavBar';
import MySelf from './MySelf';

import { Screen } from './styles';

const About = ({ ToggleTheme }) => {
    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme}/>
            <MySelf/>
        </Screen>
    );
}

export default About;