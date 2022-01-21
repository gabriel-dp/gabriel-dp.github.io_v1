import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    height: 8vh;
    min-height: 3rem;
    max-height: 3.5rem;
    position: fixed;
    top: 0;
    z-index: 1;

    background: ${props => props.theme.colors.background}CC;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${props => props.theme.colors.background}33;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 750px) {
        justify-content: space-around;
    }
`;

export const NavBarDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    transition: all 0.25s ease;

    @media (max-width: 750px) {
        width: 70%;
    }
`;

export const NavBarList = styled.ul`
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;

export const NavBarItem = styled.li`
    color: ${props => props.theme.colors.text};
    margin: 0 2vw;
    white-space: nowrap;
    cursor: pointer;
`;

export const ThemeSwitch  = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
`;

export const SwitchIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: ${props => props.iconColor === 'gray' ? props.theme.colors.gray : props.theme.colors.primary};
`;