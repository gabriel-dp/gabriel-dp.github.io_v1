import styled from 'styled-components';

export const FooterTabContainer = styled.div`
    width: 100%;
    min-height: 15rem;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15%;

    @media (max-width: 750px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 5% 15%;
    }
`;

export const WhoDid = styled.div`
    color: ${props => props.theme.colors.gray};
    max-width: 50%;
    
    h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.1rem;
    }
    
    a, a:hover, a:focus, a:active {
        font-size: 0.85rem;
        text-decoration: underline;
        color: inherit;
    }

    @media (max-width: 750px) {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const FindMe = styled.div`
    height: 2.5rem;
    display: flex;

    a {
        display: flex;
        img {
            max-height: 100%;
            margin: 0 0.5rem;
        }
    }
`;