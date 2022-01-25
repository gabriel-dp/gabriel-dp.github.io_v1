import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import goTo from '../../utils/goTo';

import { NavBarContainer, NavBarDiv, NavBarList, NavBarItem, ThemeSwitch, SwitchIcon, HoverAnimation, FakeLabel} from './styles';
import Switch from 'react-switch';
import { FaMoon, FaSun, FaArrowLeft } from 'react-icons/fa';

const NavBar = ({ ToggleTheme, refs }) => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <ThemeContext.Provider value={theme}>
            <NavBarContainer>
                <NavBarDiv>
                    <NavBarList>
                        {
                            refs ?
                                Object.keys(refs).map(title => (
                                    <NavBarItem 
                                        onClick={() => goTo(refs[title])}
                                        className={title}
                                        key={title}
                                    >
                                        <HoverAnimation>{title}</HoverAnimation>
                                    </NavBarItem>
                                ))
                            : 
                                <NavBarItem 
                                    onClick={() => navigate('/')}
                                    className='Home'
                                >
                                    <HoverAnimation>
                                        <FaArrowLeft style={{fontSize: '0.75rem'}}/> &nbsp;Back to Home
                                    </HoverAnimation>
                                </NavBarItem>
                        }
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
                                <FaMoon/>
                            </SwitchIcon>
                        }
                        uncheckedHandleIcon={
                            <SwitchIcon iconColor='gray'>
                                <FaSun/>
                            </SwitchIcon>
                        }
                    />
                </ThemeSwitch>
            </NavBarContainer>
        </ThemeContext.Provider>
    );
}

export default NavBar;