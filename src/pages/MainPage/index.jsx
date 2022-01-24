import { useRef, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Footer from '../../components/Footer';

import { Screen } from './styles';

const MainPage = ({ ToggleTheme }) => {

    const homeRef = useRef(null);
    const aboutmeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    const refs = {
        'Home' : homeRef,
        'About Me' : aboutmeRef,
        'Skills' : skillsRef,
        'Projects' : projectsRef
    }

    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme} refs={refs}/>
            <Home innerRef={homeRef} nextRef={aboutmeRef}/>
            <AboutMe innerRef={aboutmeRef}/>
            <Skills innerRef={skillsRef}/>
            <Projects innerRef={projectsRef}/>
            <Footer/>
        </Screen>
    );

}

export default MainPage;