import { ExpContainer, ExpImage, ExpDetails, ExpHeader, ExpTitle, ExpDescription, Achievement} from './styles';
import { FaTrophy } from 'react-icons/fa';

const ExpCard = ({ title, time, achievement, logo, image, description }) => {
    return (
        <ExpContainer>
            <ExpImage>
                <img src={image}/>
            </ExpImage>
            <ExpDetails>
                <ExpHeader>
                    <ExpTitle>
                        <h3>{title}</h3>
                        <h5>{time}</h5>
                        <Achievement>
                            <FaTrophy style={{fontSize: '1.5rem', marginRight: '1rem'}}/>{achievement}
                        </Achievement>
                    </ExpTitle>
                    <img src={logo}/>
                </ExpHeader>
                <ExpDescription>
                    <p>{description}</p>
                </ExpDescription>
            </ExpDetails>
        </ExpContainer>
    );
}

export default ExpCard;