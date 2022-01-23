import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconsContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const StyledIconFA = styled(FontAwesomeIcon)`
    margin: 0 0.75rem;
    font-size: ${props => props.iconSize}rem;
    color: ${props => props.theme.colors.gray};
    transition: all 0.25s ease;

    @media (min-width: 750px) {
        :hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`;