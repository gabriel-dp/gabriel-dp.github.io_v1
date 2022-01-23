import { IconsContainer, StyledIconFA } from './styles';
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const IconsContact = () => {

    const socialMediaIcons = [
        {
            'icon': faGithub,
            'url': 'https://github.com/gabrieldp23',
        },
        {
            'icon': faLinkedin,
            'url': 'https://www.linkedin.com/in/gabriel-meira-041869166/',
        },
        {
            'icon': faInstagram,
            'url': 'https://www.instagram.com/gabs_dp_/',
        },
    ];

    return (
        <IconsContainer>
            {
                socialMediaIcons.map((media, index) => (
                    <a target='_blanck' href={media['url']}>
                        <StyledIconFA 
                            key={index} 
                            icon={media['icon']} 
                            iconSize={2}
                        />
                    </a>
                ))
            }
        </IconsContainer>
    );
}

export default IconsContact;