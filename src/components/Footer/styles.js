import styled from 'styled-components';

export const FooterTabContainer = styled.div`
    width: 100%;
    min-height: 15rem;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem 15%;
    transition: all 0.2s ease;
    flex-wrap: wrap;

    @media (max-width: 750px) {
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
    }
`;

export const WhoDid = styled.div`
    width: 50%;
    color: ${props => props.theme.colors.gray};
    white-space: nowrap;
    
    h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.1rem;
    }
    
    a, a:hover, a:focus, a:active {
        font-size: 0.85rem;
        text-decoration: underline;
        color: inherit;
        transition: color 0.25s ease;
    }

    @media (min-width: 750px) {
        a:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
    
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const FindMe = styled.div`
    width: 50%;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 750px) {
       justify-content: center;
    }

    a, a:hover, a:focus, a:active {
        font-size: 0.85rem;
        text-decoration: underline;
        color: inherit;
        transition: color 0.25s ease;
    }
`;