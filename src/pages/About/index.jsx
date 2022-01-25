import NavBar from '../../components/NavBar';
import MySelf from './MySelf';
import Education from './Education';

import { Screen } from './styles';

const About = ({ ToggleTheme }) => {
    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme}/>
            <MySelf/>
            <Education/>
        </Screen>
    );
}

export default About;