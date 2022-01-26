import styled from 'styled-components';

export const ExpContainer = styled.div`
    width: 100%;
    height: 20rem;
    position: relative;
    cursor: default;

    :hover {
        .image {
            left: 0;
            img {
                filter: none;
            }
        }

        .details {
            right: 0;
        }
    }
`;

export const ExpImage = styled.div.attrs({
    className: 'image'
})`
    width: 50%;
    height: 17.5rem;
    border: 0.25rem ${props => props.theme.colors.lightgray} solid;
    border-radius: 1rem;
    position: absolute;
    left: 20%;
    transition: all 0.5s ease-in-out;

    display: flex;
    justify-content: center;
    overflow: hidden;
    
    img {
        transition: all 0.5s ease;
        filter:  sepia(84%) hue-rotate(164deg) brightness(50%) contrast(98%);
        min-width: 100%;
        object-fit: cover;
    }
`;

export const ExpDetails = styled.div.attrs({
    className: 'details'
})`
    width: 55%;
    background-color: ${props => props.theme.colors.lightgray};
    border-radius: 0 1rem 1rem 1rem;
    position: absolute;
    right: 15%;
    transition: all 0.5s ease-in-out;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExpHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        height: 3rem;
        width: 6rem;
        object-fit: contain;
        object-position: right
    }
`;

export const ExpTitle = styled.div`
    h3 {
        font-size: 1.75rem;
        font-family: 'Oswald', sans-serif;
    }

    h5 {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1.5rem;
    }
`;

export const ExpDescription = styled.div`
    position: relative;

    p {
        margin: 1.5rem 0;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.black};
    }
`;

export const Achievement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    position: relative;
    right: 0;
`;