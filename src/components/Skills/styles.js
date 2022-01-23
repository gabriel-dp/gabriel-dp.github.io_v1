import styled from 'styled-components';

export const SkillsTabContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease;
    padding: 4rem 15%;

    @media (max-width: 650px) {
        padding : 4rem 10%;
    }

`;

export const SkillsClassTitle = styled.h2`
    font-size: ${props => props.size}rem;
    color: ${props => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
`;

export const IconsContainer = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.primary};
    margin-bottom: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 750px) {
        flex-wrap: wrap;
        justify-items: center;
    }
`;

export const SkillIcon = styled.div`
    height: ${props => props.size}rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    margin: 1rem 0.625em;
    transition: all 0.25s ease;

    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }

    @media (min-width: 750px) {
        :hover {
            height: ${props => props.size + 1}rem;
        }
    }
`;