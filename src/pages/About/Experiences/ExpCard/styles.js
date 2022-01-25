import styled from 'styled-components';

export const ExpContainer = styled.div`
    width: 100%;
    height: 20rem;
    position: relative;

    :hover {
        .image {
            left: 0;
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
    height: 100%;
    background-color: ${props => props.theme.colors.gray};
    border: 0.25rem ${props => props.theme.colors.lightgray} solid;
    border-radius: 1rem;
    position: absolute;
    left: 20%;
    transition: all 0.5s ease-in-out;

    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        min-width: 100%;
        object-fit: cover;
    }
`;

export const ExpDetails = styled.div.attrs({
    className: 'details'
})`
    width: 55%;
    height: 100%;
    background-color: ${props => props.theme.colors.lightgray};
    border: 0.25rem ${props => props.theme.colors.text} solid;
    border-radius: 1rem;
    position: absolute;
    right: 15%;
    transition: all 0.5s ease-in-out;
`;
