import styled from 'styled-components';

export const EducationContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 15%;
`;

export const TimeLine = styled.div`
    width: 100%;
`;

export const GraduationContainer = styled.div`
    width: 100%;
    min-height: 10rem;
    position: relative;
`;

export const Graduation = styled.div`
    width: calc(50% - 3rem);
    min-width: 15rem;
    margin: 0 1rem 1rem 1rem;
    background-color: ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.primary};
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    color: ${props => props.theme.colors.white};
    transition: all 0.25s ease;
    position: absolute;
    right: 0;
    cursor: default;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    &::before {
        content: '';
        height: 0;
        width: 0;
        border: 0.75rem  ${props => props.theme.title === 'dark' ? props.theme.colors.secondary : props.theme.colors.primary} solid;
        border-bottom: 0.75rem solid transparent;
        border-right: 0.75rem solid transparent;
        border-left: 0.75rem solid transparent;
        position: absolute;
        top: 2rem;
        transform: rotate(90deg);
        transition: all 0.25s ease; 
    }

    &.right {
        .circle {
            left: -2.5rem;
        }

        ::before {
            left: -1.5rem;
        }
    }

    @media (min-width: 1000px) {
        &.left {
            flex-direction: row-reverse;
            left: 0;

            .data {
                text-align: right;
            }

            .circle {
                right: -2.5rem;
            }

            ::before {
                position: absolute;
                right: -1.5rem;
                transform: rotate(-90deg);
            }
        }

        :hover {
            color: ${props => props.theme.colors.white};

            &.left {
                transform: translateX(-0.5rem);
                .circle {
                    transform: translateX(0.5rem);
                }
            }

            &.right {
                transform: translateX(0.5rem);
                .circle {
                    transform: translateX(-0.5rem);
                }
            }
        }
    }

    @media (max-width: 999px) {
        margin-left: 2rem;
        width: 90%;

        &.left {
            left: 0;

            .circle {
                left: -2.5rem;
            }

            ::before {
                position: absolute;
                left: -1.5rem;
                transform: rotate(90deg);
            }
        }

        &.right {
            left: 0;
        }
    }
`;

export const GraduationData = styled.div.attrs({
    className : 'data'
})`

    h3 {
        font-size: 1.1rem;
    }

    h4 {
        font-size: 0.8rem;
        margin: 0.25rem 0;
    }

    h5 {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
    }
`;

export const InstitutionLogo = styled.img`
    height: 2.5rem;
    margin: 0 1rem;
`;

export const GraduationTime = styled.h6`
`;

export const MiddleTimeLine = styled.div`
    width: 0.25rem;
    height: 100%;
    background-color: ${props => props.theme.colors.gray};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 999px) {
        left: 0;
    }
`;

export const MiddleCircle = styled.div.attrs({
    className : 'circle',
})`
    height: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.gray};
    position: absolute;
    top: 2.25rem;
    color: ${props => props.theme.colors.background};
    transition: all 0.25s ease; 
`;
