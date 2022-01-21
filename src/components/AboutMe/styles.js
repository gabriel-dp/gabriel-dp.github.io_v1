import styled from 'styled-components';

export const AboutMeTabContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 10rem;

    @media (max-width: 750px) {
        padding: 2rem 0;
        padding-bottom: 4rem;
    }
`;

export const MySelf = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const MyPhoto = styled.div`
    height: 25rem;
    aspect-ratio: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const MyDescription = styled.div`
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        text-align: right;
    }

    @media (max-width: 750px) {
        width: 75%;
        align-items: center;

        p {
            text-align: justify;
        }
    }
`;