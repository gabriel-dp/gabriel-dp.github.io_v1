import { ExpContainer, ExpImage, ExpDetails } from './styles';

const ExpCard = () => {
    return (
        <ExpContainer>
            <ExpImage>
                <img src={require('../../../../assets/images/exp/anicon.jpg')}/>
            </ExpImage>
            <ExpDetails>

            </ExpDetails>
        </ExpContainer>
    );
}

export default ExpCard;