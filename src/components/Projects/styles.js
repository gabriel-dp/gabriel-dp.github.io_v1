import styled from 'styled-components';

export const ProjectsTabContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease;
    padding: 4rem 15%;

    @media (max-width: 625px) {
        padding : 4rem 10%;
    }
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
    color: ${props => props.theme.title === 'dark' ? props.theme.colors.text : props.theme.colors.white};

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
        font-size: 1rem;  

        @media (min-width: 750px) {
            position: relative;
            display: block;
            transition: 0.25s;

            ::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 2px;
                top: 100%;
                left: 0;
                background: ${props => props.theme.colors.white};
                transition: transform 0.5s;
                transform: scaleX(0);
                transform-origin: right;
            }

            :hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`;