import styled from 'styled-components';

const MyPhotoDiv = styled.div`
    width: 100%;
    max-width: ${props => props.size}rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};

    img {
        max-width: 100%;
        z-index: 0;
    }

    &::before {
        --size: ${props => props.size}rem;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, ${props => props.theme.colors.lightgray}55, transparent);
        transition: all 0.25s ease-in-out;
    }

    :hover {
        ::before {
            background: radial-gradient(circle closest-side, ${props => props.theme.colors.lightgray}66, transparent);
        }
    }
`;

const MyPhoto = ({ size }) => {
    return (
        <MyPhotoDiv size={size}>
            <img src={require('../../assets/images/model-circle.png')} alt='a handsome guy'/>
        </MyPhotoDiv>
    );
}

export default MyPhoto;