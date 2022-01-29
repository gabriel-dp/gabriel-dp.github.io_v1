import styled from 'styled-components';

export const Screen = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
`;

export const ProjectsTabContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease;
    padding: 6rem 15%;

    @media (max-width: 625px) {
        padding : 4rem 10%;
    }
`;

export const CardsContainer = styled.div`
    height: auto;
    width: 100%;
    padding-bottom: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;