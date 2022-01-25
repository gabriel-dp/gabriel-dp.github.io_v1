import styled from 'styled-components';

export const ExperiencesContainer = styled.div`
    width: 100%;
    min-height: 50rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 15%;
`;