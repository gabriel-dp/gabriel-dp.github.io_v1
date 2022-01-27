import styled from 'styled-components';

export const ExpContainer = styled.div`
    width: 100%;
    max-width: 65rem;
    margin-bottom: 2.5rem;
    cursor: default;
    display: flex;
    flex-direction: row;

    :hover {
        .image {
            transform: translateX(5%);
            img {
                filter: none;
            }
        }

        .details {
            transform: translateX(-10%);
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;

        :hover {
            .image {
                transform: translateY(-2.5%);
                img {
                    filter: none;
                }
            }
            
            .details {
                transform: translateX(0);
            }
        }
    }
`;

export const ExpImage = styled.div.attrs({
    className: 'image'
})`
    width: 50%;
    max-width: 30rem;
    height: 18rem;
    border: 0.25rem ${props => props.theme.colors.lightgray} solid;
    border-radius: 1rem;
    transform: translateX(35%);
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

    @media (max-width: 1000px) {
        width: 100%;
        transform: translateY(-70%);
        border-radius: 0 0 1rem 1rem;
    }
`;

export const ExpDetails = styled.div.attrs({
    className: 'details'
})`
    width: 55%;
    background-color: ${props => props.theme.colors.lightgray};
    border-radius: 0 1rem 1rem 1rem;
    transform: translateX(-30%);
    transition: all 0.5s ease-in-out;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: -2px 2px 5px ${props => props.theme.colors.black};
    z-index: 1;
    position: relative;

    @media (max-width: 1000px) {
        width: 100%;
        transform: none;
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0 2px 5px ${props => props.theme.colors.black};
        max-width: 30rem;
    }
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
        font-size: 1.5rem;
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
        margin: 1.5rem 0 3rem 0;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.black};
        text-align: justify;
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

export const ExpExtLink = styled.a.attrs({
    className: 'link'
})`
    padding: 0.25rem;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 0.875rem;
    transition: all 0.2s ease;

    :hover {
        color: ${props => props.theme.colors.primary};
    }
`;