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
`;

export const NavBarDiv = styled.div`
    width: 55%;
    display: flex;
    justify-content: center;
    transition: all 0.25s ease;
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
    font-size: 1rem;
    margin: 0 2vw;
    white-space: nowrap;
    cursor: pointer;
    display: none;
    transition: font-size 0.1s ease;

    &.home {
        display: block
    }

    @media (min-width: 625px) {
        display: block;
    }

    @media (min-width: 750px) {
        :hover {
            font-size: 1.1rem;
        }
    }
`;

export const HoverAnimation = styled.a`
    user-select: none;
    position: relative;
    display: block;
    transition: 0.25s;

    @media (min-width: 750px) {
        ::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            top: 100%;
            left: 0;
            background: ${props => props.theme.colors.primary};
            transition: transform 0.5s;
            transform: scaleX(0);
            transform-origin: right;
        }

        :hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;

export const ThemeSwitch  = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 22.5%;
`;

export const SwitchIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: ${props => props.iconColor === 'gray' ? props.theme.colors.gray : props.theme.colors.primary};
`;

export const FakeLabel = styled.label`
    font-size: 1px;
`;