import styled from 'styled-components';

export const SeeMoreContainer = styled.div`
    color: ${props => props.theme.colors.white};

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