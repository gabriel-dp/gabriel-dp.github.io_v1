import styled from 'styled-components';

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
    border: 0.2rem ${props => props.theme.colors.lightgray} solid;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};

    img {
        width: 100%;
        max-width: 18rem;
        z-index: 0;
    }

    &::before {
        --size: 20rem;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, ${props => props.theme.colors.lightgray}55, transparent);
        transition: all 0.25s ease-in-out;
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
`;

export const SingleDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.1rem;
    margin: 0.25rem 0;
    white-space: nowrap;
    color: ${props => props.theme.colors.white};

    span {
        padding-bottom: 0.25rem;
    }

    :hover {
        .icon {
            transform: rotate(360deg);
        }
    }
`;

export const StyledIconFA = styled.div.attrs({
    className: 'icon'
})`
    display: inline-block;
    font-size: 1.4rem;
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