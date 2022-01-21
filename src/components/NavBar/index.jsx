import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { NavBarContainer, NavBarDiv, NavBarList, NavBarItem, ThemeSwitch, SwitchIcon } from './styles';
import Switch from 'react-switch';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';

const NavBar = ({ToggleTheme, goTo, aboutmeRef, skillsRef, projectsRef}) => {
    const theme = useContext(ThemeContext)

    return (
        <ThemeContext.Provider value={theme}>
            <NavBarContainer>
                <NavBarDiv>
                    <NavBarList>
                        <NavBarItem onClick={() => goTo(aboutmeRef)}>About Me</NavBarItem>
                        <NavBarItem onClick={() => goTo(skillsRef)}>Skills</NavBarItem>
                        <NavBarItem onClick={() => goTo(projectsRef)}>Projects</NavBarItem>
                    </NavBarList>
                </NavBarDiv>
                <ThemeSwitch>
                    <Switch
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