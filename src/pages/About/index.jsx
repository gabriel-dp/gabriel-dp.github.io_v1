import { useEffect } from 'react';

import NavBar from '../../components/NavBar';
import MySelf from './MySelf';
import Education from './Education';
import Experiences from './Experiences';
import Footer from '../../components/Footer';

import { Screen } from './styles';

const About = ({ ToggleTheme }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme}/>
            <MySelf/>
            <Education/>
            <Experiences/>
            <Footer/>
        </Screen>
    );
}

export default About;