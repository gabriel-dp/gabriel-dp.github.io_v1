import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
`;

export const HeaderTitle = styled.h1`
    font-size: 3rem;
    color: ${props => props.bg === 'dark' ? props.theme.colors.white : props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
`;

export const HeaderSubtitle = styled.h4`
    font-size: 1.25rem;
    color: ${props => props.bg === 'dark' ? props.theme.colors.white : props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
`;