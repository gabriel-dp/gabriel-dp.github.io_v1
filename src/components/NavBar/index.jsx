import { NavBarContainer, NavBarList, NavBarItem } from './styles';

const NavBar = () => {
    return (
        <NavBarContainer>
            <NavBarList>
                <NavBarItem>About Me</NavBarItem>
                <NavBarItem>Skills</NavBarItem>
                <NavBarItem>Projects</NavBarItem>
            </NavBarList>
        </NavBarContainer>
    );
}

export default NavBar;