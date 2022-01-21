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
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid ${props => props.theme.colors.background}33;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NavBarList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;

export const NavBarItem = styled.li`
    color: ${props => props.theme.colors.text};
    margin: 0 1.5rem;
    cursor: pointer;
`;