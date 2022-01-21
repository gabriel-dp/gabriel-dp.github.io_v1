import styled from 'styled-components';

export const CardContainer = styled.div`
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

    display: flex;
    justify-items: center;
    flex-direction: column-reverse;

    :hover {
        .description {
            height: 65%;
        }

        .language {
            font-size: 0.75em;
        }
    }
`;

export const ImageCover = styled.div`
    height: 65%;
    width: 100%;
    background-color: gray;
    overflow: hidden;

    img {
        max-width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    height: 35%;
    width: 100%;
    padding: 1em;
    background-color: ${props => props.theme.colors.lightgray};
    color: ${props => props.theme.colors.black};
    transition: all 0.25s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    
    h2 {
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
