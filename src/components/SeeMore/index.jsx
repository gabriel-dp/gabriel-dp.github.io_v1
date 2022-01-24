import { SeeMoreContainer } from './styles';

const SeeMore = (props) => {
    return (
        <SeeMoreContainer>
            {props.children}
        </SeeMoreContainer>
    );
}

export default SeeMore;