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
    transition: all 0.5s ease;

    @media (max-width: 900px) {
        padding: 0 7%;
    }

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
    white-space: nowrap;
    
    h1 { 
        font-family: 'Oswald', sans-serif;
        font-size: 3em;
    }

    h2 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.3em;
        margin-bottom: 1.5rem;
    }
`;

export const Object3DContainer = styled.div`
    width: 50%;
    aspect-ratio: 1.25;
    overflow: hidden;
    border-radius: 100%;
    cursor: pointer;
    
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