import styled from 'styled-components';

export const ProjectsTabContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4rem 15%;
`;

export const CardsContainer = styled.div`
    height: auto;
    width: 100%;
    padding-bottom: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const SeeMore = styled.div`
    text-decoration: underline;
    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.white};

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
        font-size: 1rem;    
    }
`;