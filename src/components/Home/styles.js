import styled from 'styled-components';
import { BiDownArrow } from 'react-icons/bi';

export const HomeTabContainer = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 15%;

    @media (max-width: 750px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const MainTitle = styled.div`
    color: ${props => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 { 
        font-family: 'Oswald', sans-serif;
        font-size: 3em;
    }

    h3 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.2em;
    }
`;

export const Object3DContainer = styled.div`
    width: 40%;
    height: 50%;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const StyledArrow = styled(BiDownArrow)`
    color: ${props => props.theme.colors.text};
    font-size: 1.25rem;
    position: absolute;
    bottom: 7vh;
    left: 50%;
    transform: translate(-50%);
    transition: all 0.25s ease;
    cursor: pointer;

    @media (min-width: 750px) {
        :hover {
            font-size: 1.5rem;
            color: ${props => props.theme.colors.primary};
        }
    }
`;