import styled from 'styled-components';

export const SeeMoreButtonContainer = styled.div`
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: 0.25s all ease;

    background: ${props => props.bg === 'switch' ? (props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.primary) : props.theme.colors.secondary+'99'};
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${props => props.theme.colors.background}33;

    .arrow-icon {
        font-size: 0.875rem;
        transition: 0.25s all ease;
    }

    :hover {
        gap: 1.25rem;
        background: ${props => props.bg === 'switch' ? ( props.theme.title === 'light' ? props.theme.colors.secondary : props.theme.colors.primary) :  props.theme.colors.white}DD;
        color: ${props => props.bg === 'switch' ?  props.theme.colors.white : props.theme.colors.primary};  
    }
`;