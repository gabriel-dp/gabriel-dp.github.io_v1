import styled from 'styled-components';

export const SkillsTabContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.colors.background};
`;

export const SkillsClassTitle = styled.h2`
    font-size: ${props => props.size}rem;
    color: ${props => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
`;

export const IconsContainer = styled.div`
    width: 75%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.secondary};
    margin-bottom: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 750px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr;
        justify-items: center;
    }
`;

export const SkillIcon = styled.div`
    height: ${props => props.size}rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    transition: all 0.25s ease;

    img {
        max-height: 100%;
        max-width: 100%;
    }

    :hover {
        height: ${props => props.size + 1}rem;
    }
`;