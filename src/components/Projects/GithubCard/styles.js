import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardContainer = styled.a`
    width: 100%;
    max-width: 25.5rem;
    height: 16.5rem;
    margin: 0 0.5rem;
    margin-bottom: 2rem;
    border: 0.25em ${props => props.theme.colors.lightgray} solid;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    color: inherit;  

    display: flex;
    justify-items: center;
    flex-direction: column-reverse;

    @media (min-width: 750px) {
        :hover {
            .description {
                height: 65%;
            }

            .language {
                font-size: 0.75em;
            }
        }
    }
`;

export const ImageCover = styled.div`
    height: 70%;
    width: 100%;
    background-color: gray;
    overflow: hidden;

    img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
    }
`;

export const DescriptionContainer = styled.div`
    height: 32.5%;
    width: 100%;
    padding: 0.75em 1em;
    background-color: ${props => props.theme.colors.lightgray};
    color: ${props => props.theme.colors.black};
    transition: all 0.25s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h4 {
        font-size: 1em;
        margin-bottom: 0.15em;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
    }
    
    p {
        font-size: 0.7em;
    }
`;

export const LanguageContainer = styled.div`
    padding: 0.4em 1.25em;
    background-color: ${props => props.theme.colors.black};
    color: white;
    font-size: 0.8em;
    transition: all 0.25s ease;
    border-radius: 1em;

    position: absolute;
    top: 7%;
    right: 5%;
`;

export const TagsContainer = styled.div`
    width: 100%;
    margin-top: 1.25rem;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
`;

export const TagItem = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};
    font-size: 0.85rem;
    margin-right: 0.75rem;
    padding: 0 1rem;
    border-radius: 1rem;
    white-space: nowrap;
`;

export const WebsiteButton = styled(FontAwesomeIcon)`
    width: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    color: ${props => props.theme.colors.black};
    transition: all 0.25s ease;

    :hover {
        color: ${props => props.theme.colors.gray};
    }
`;
