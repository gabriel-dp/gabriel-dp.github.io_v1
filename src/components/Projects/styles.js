import styled from 'styled-components';

export const ProjectsTabContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardsContainer = styled.div`
    height: auto;
    width: 100%;
    max-width: 750px;
    background-color: ${props => props.theme.colors.primary};
    padding-bottom: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const SeeMore = styled.div`
    text-decoration: underline;
    color: ${props => props.theme.colors.text};
    margin-bottom: 2rem;
    
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

`;