import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const MyPhoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    border: 0.2rem ${props => props.theme.colors.white} solid;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};

    img {
        width: 100%;
        max-width: 18rem;
    }

    :hover {
        background-color: ${props => props.theme.colors.secondary}CC;
    }
`;

export const MyDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 2rem 0 3rem 0;
    padding: 0 1.5rem;
    cursor: default;

    p {
        font-size: 1rem;
        padding-bottom: 1rem;
        white-space: nowrap;
        color: ${props => props.theme.colors.white};

        :hover {
            .icon {
                transform: rotate(360deg);
            }
        }
    }
`;

export const StyledIconFA = styled(FontAwesomeIcon).attrs({
    className: 'icon'
})`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.white};
    transition: all 0.5s ease-in-out;
    margin-right: 0.75rem;
`;

export const MyDescription = styled.div`
    width: 100%;
    max-width: 50rem;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    margin: 3rem 0;
    padding: 1.5rem 2rem;
    border: 0.2rem ${props => props.theme.colors.white} solid;

    p {
        color: ${props => props.theme.colors.white};
    }
`;