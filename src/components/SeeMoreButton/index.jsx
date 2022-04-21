import { useNavigate } from 'react-router-dom';
import { SeeMoreButtonContainer } from './styles';
import { FaArrowRight } from 'react-icons/fa'

const SeeMoreButton = (props) => {
    const navigate = useNavigate();
    function handleClickLink (url) {
        if (url) {
            navigate(`/${url}`);
        }
    }

    return (
        <SeeMoreButtonContainer onClick={() => handleClickLink(props.url)} bg={props.bg}>
            {props.children}
            <FaArrowRight className='arrow-icon'/>
        </SeeMoreButtonContainer>
    );
}

export default SeeMoreButton;