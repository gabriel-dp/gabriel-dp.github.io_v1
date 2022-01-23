import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { NavBarContainer, NavBarDiv, NavBarList, NavBarItem, ThemeSwitch, SwitchIcon, HoverAnimation, FakeLabel} from './styles';
import Switch from 'react-switch';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';

const NavBar = ({ToggleTheme, goTo, homeRef, aboutmeRef, skillsRef, projectsRef}) => {
    const theme = useContext(ThemeContext)

    return (
        <ThemeContext.Provider value={theme}>
            <NavBarContainer>
                <NavBarDiv>
                    <NavBarList>
                        <NavBarItem onClick={() => goTo(homeRef)} className='home'><HoverAnimation>Home</HoverAnimation></NavBarItem>
                        <NavBarItem onClick={() => goTo(aboutmeRef)}><HoverAnimation>About Me</HoverAnimation></NavBarItem>
                        <NavBarItem onClick={() => goTo(skillsRef)}><HoverAnimation>Skills</HoverAnimation></NavBarItem>
                        <NavBarItem onClick={() => goTo(projectsRef)}><HoverAnimation>Projects</HoverAnimation></NavBarItem>
                    </NavBarList>
                </NavBarDiv>
                <ThemeSwitch>
                    <FakeLabel htmlFor="reactswitch">.</FakeLabel>
                    <Switch
                        aria-labelledby='reactswitch'
                        className='reactswitch'
                        onChange={ToggleTheme}  
                        checked={theme.title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        offColor={theme.colors.gray}
                        onColor={theme.colors.primary}
                        handleDiameter={25}
                        height={20}
                        boxShadow="1px 1px 5px rgba(0, 0, 0, 0.75)"
                        checkedHandleIcon={
                            <SwitchIcon>
                                <MdNightlightRound/>
                            </SwitchIcon>
                        }
                        uncheckedHandleIcon={
                            <SwitchIcon iconColor='gray'>
                                <MdWbSunny/>
                            </SwitchIcon>
                        }
                    />
                </ThemeSwitch>
            </NavBarContainer>
        </ThemeContext.Provider>
    );
}

export default NavBar;