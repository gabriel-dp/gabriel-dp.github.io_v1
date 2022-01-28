import { ExpContainer, ExpImage, ExpDetails, ExpHeader, ExpTitle, ExpDescription, Achievement, ExpExtLink} from './styles';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const ExpCard = ({ title, time, achievement, logo, image, description, link }) => {
    return (
        <ExpContainer>
            <ExpImage>
                <img src={image} alt={`${title}-image`}/>
            </ExpImage>
            <ExpDetails>
                <ExpHeader>
                    <ExpTitle>
                        <h4>{title}</h4>
                        <h5>{time}</h5>
                        <Achievement>
                            <FaTrophy style={{fontSize: '1.5rem', marginRight: '1rem'}}/>{achievement}
                        </Achievement>
                    </ExpTitle>
                    <img src={logo} alt={`${title}-logo`}/>
                </ExpHeader>
                <ExpDescription>
                    <p>{description}</p>
                </ExpDescription>
                <ExpExtLink 
                    target='_blank' 
                    href={link} 
                    aria-label={`${title}-reportage`}
                    rel='noreferrer'
                >
                    <FaExternalLinkAlt/>
                </ExpExtLink>
            </ExpDetails>
        </ExpContainer>
    );
}

export default ExpCard;