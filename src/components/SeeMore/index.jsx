import { useNavigate } from 'react-router-dom';
import { SeeMoreContainer } from './styles';

const SeeMore = (props) => {
    const navigate = useNavigate();
    function handleClickLink (url) {
        if (url) {
            navigate(`/${url}`);
        }
    }

    return (
        <SeeMoreContainer onClick={() => handleClickLink(props.url)}>
            {props.children}
        </SeeMoreContainer>
    );
}

export default SeeMore;