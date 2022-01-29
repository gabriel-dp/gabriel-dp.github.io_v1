import styled from 'styled-components';

export const SeeMoreContainer = styled.div`
    color: ${props => props.bg === 'switch' ? props.theme.colors.text : props.theme.colors.white};
    cursor: pointer;

    a, a:hover, a:focus, a:active, p {
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
                background: ${props => props.bg === 'switch' ? props.theme.colors.primary : props.theme.colors.white};
                transition: transform 0.25s;
                transform: scaleX(0);
                transform-origin: right;
            }

            :hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }

        @media (max-width: 749px) {
            text-decoration: underline;
        }
    }
`;