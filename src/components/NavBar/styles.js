import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    height: 8vh;
    background-color: ${props => props.theme.colors.background};
    border-bottom: 1px ${props => props.theme.colors.text}99 solid;
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-height: 600px) {
        height: 3rem;
    }
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