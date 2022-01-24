import NavBar from '../../components/NavBar';

import { Screen } from './styles';

const About = ({ ToggleTheme }) => {
    

    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme}/>
        </Screen>
    );
}

export default About;