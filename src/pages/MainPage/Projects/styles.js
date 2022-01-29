import styled from 'styled-components';

export const ProjectsTabContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease;
    padding: 4rem 15%;

    @media (max-width: 625px) {
        padding : 4rem 10%;
    }
`;

export const ProjectContainer = styled.div`
    width: 80%;
    max-width: 60rem;
    height: 25rem;
    display: flex;
    flex-direction: ${props => props.side ? 'row' : 'row-reverse'};
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 3rem;
    cursor: default;

    ${props => props.side ? 'margin-right: 5%' : 'margin-left: 5%'};

    .details {
        align-items: ${props => props.side ? 'flex-start' : 'flex-end'};
        text-align: ${props => props.side ? 'left' : 'right'};
    }

    @media (max-width: 850px) {
        flex-direction: column-reverse;
        height: 40rem;
        width: 100%;
        margin: 0;
        margin-bottom: 3rem;

        .details {
            align-items: flex-start;
            text-align: left;
        }
    }
`;

export const ProjectImage = styled.div`
    width: 40%;
    height: 100%;
    background-color: gray;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 0.25s ease;
    
    img {
        width:100%; 
        height:100%;
        object-fit: cover;
        object-position: center;
    }
    
    ::after {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
        box-shadow: inset 0 -4rem 5rem ${props => props.theme.colors.primary}55;
        transition: all 0.25s ease;
    }

    :hover {
        ::after {
            box-shadow: inset 0 -4rem 5rem ${props => props.theme.colors.primary}11;
        }
    }

    @media (max-width: 850px) {
        width: 100%;
        height: 40%;
    }
`;

export const ProjectDetails = styled.div.attrs({
    className:'details'
})`
    height: 100%;
    width: 60%;
    background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 2rem 2.5rem;
    text-align: justify;
    position: relative;
    transition: all 0.25s ease;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 1.75rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        margin-bottom: 0.25rem;
    }

    h4 {
        font-size: 1.1rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        margin-bottom: 1.5rem;
        color: ${props => props.theme.colors.lightgray}
    }

    p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    @media (max-width: 850px) {
        width: 100%;
        min-height: 60%;
    }
`;

export const ProjectTools = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    
    h5 {
        font-size: 1.15rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        margin-bottom: 0.75rem;
    }
    
    img {
        height: 2rem;
        margin: 0 0.5rem;
        transition: all 0.25s ease;

        @media (max-width: 750px) {
            :hover {
                height: 2.25rem;
            }
        }
    }
`;

export const ProjectLink = styled.button.attrs({
    className:'view-project'
})`
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 1rem;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background}FF;
    transition: all 0.25s ease;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    box-shadow: 0 0 1rem ${props => props.theme.colors.black};

    :hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.secondary};
    }
`;