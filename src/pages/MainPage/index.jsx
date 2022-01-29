import { useRef, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Footer from '../../components/Footer';

import { Screen } from './styles';

const MainPage = ({ ToggleTheme }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const homeRef = useRef(null);
    const aboutmeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    const refs = {
        'Home' : homeRef,
        'Skills' : skillsRef,
        'Projects' : projectsRef,
        'About Me' : aboutmeRef,
    }

    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme} refs={refs}/>
            <Home innerRef={homeRef} nextRef={refs['Skills']}/>
            <Skills innerRef={skillsRef}/>
            <Projects innerRef={projectsRef}/>
            <AboutMe innerRef={aboutmeRef}/>
            <Footer/>
        </Screen>
    );

}

export default MainPage;