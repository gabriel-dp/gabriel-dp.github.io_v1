import styled from 'styled-components';

export const AboutMeTabContainer = styled.div`
    width: 100%;
    min-height: 35rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 15%;
`;

export const MySelf = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`;

export const MyPhoto = styled.div`
    width: 100%;
    margin-right: 10%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        max-width: 20rem;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export const MyDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.white};
    }

    @media (max-width: 900px) {
        width: 100%;
        align-items: center;

        p {
            text-align: justify;
        }
    }
`;