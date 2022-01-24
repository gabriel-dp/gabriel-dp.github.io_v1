import { useRef } from 'react';

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

    const goTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme} goTo={goTo} homeRef={homeRef} aboutmeRef={aboutmeRef} skillsRef={skillsRef} projectsRef={projectsRef}/>
            <Home goTo={goTo} innerRef={homeRef} nextRef={aboutmeRef}/>
            <AboutMe innerRef={aboutmeRef}/>
            <Skills innerRef={skillsRef}/>
            <Projects innerRef={projectsRef}/>
            <Footer/>
        </Screen>
    );

}

export default MainPage;