import { IconsContainer, StyledIconFA } from './styles';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const IconsContact = () => {

    const socialMediaIcons = [
        {
            'icon': <FaGithub/>,
            'url': 'https://github.com/gabriel-dp',
        },
        {
            'icon': <FaLinkedin/>,
            'url': 'https://www.linkedin.com/in/gabriel-de-paula-meira/',
        },
        {
            'icon': <FaInstagram/>,
            'url': 'https://www.instagram.com/gabs_dp_/',
        },
    ];

    return (
        <IconsContainer>
            {
                socialMediaIcons.map((media) => (
                    <a key={media['url']} target='_blanck' href={media['url']} aria-label={media} >
                        <StyledIconFA>
                            {media['icon']}
                        </StyledIconFA>
                    </a>
                ))
            }
        </IconsContainer>
    );
}

export default IconsContact;