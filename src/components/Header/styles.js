import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderTitle = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
`;

export const HeaderSubtitle = styled.h4`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
`;