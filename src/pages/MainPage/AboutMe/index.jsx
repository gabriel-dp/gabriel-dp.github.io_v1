import Header from '../../../components/Header';
import SeeMore from '../../../components/SeeMore';

import { AboutMeTabContainer, MySelf, MyPhoto, MyDetails, StyledIconFA , MyDescription} from './styles';
import { FaHourglassHalf, FaMapMarkerAlt, FaGraduationCap, FaBasketballBall  } from 'react-icons/fa';

const AboutMe = ({innerRef}) => {

    const myAge = parseInt((new Date() - new Date('06/19/2004')) / (1000*60*60*24*365));

    return (
        <div ref={innerRef}>
            <AboutMeTabContainer>
                <Header bg={'dark'} bottom={2} title={'About Me'} subtitle={'Who is Gabriel?'}/>
                <MySelf>
                    <MyDetails>
                        <p><StyledIconFA><FaHourglassHalf/></StyledIconFA>{myAge} years old</p>
                        <p><StyledIconFA><FaMapMarkerAlt/></StyledIconFA>Brazil &nbsp;//&nbsp; Vitória da Conquista - BA</p>
                        <p><StyledIconFA><FaGraduationCap/></StyledIconFA>Future Computer Scientist</p>
                        <p><StyledIconFA><FaBasketballBall/></StyledIconFA>Basketball player - 23</p>
                    </MyDetails>
                    <MyPhoto>
                        <img src={require('../../../assets/images/model-circle.png')} alt='a handsome guy'/>
                    </MyPhoto>
                </MySelf>
                <MyDescription>
                    <p>A Enthusiastic of Robotics & Technology who started the developer career in 2019, during the High School with the Brazilian Robotics Olympiad (OBR). In addition to programming, I also have experience with Design and 3D Modeling due the F1 in Schools challenge.</p>
                </MyDescription>
                <SeeMore url='about' aria-label='More Projects'>
                    <a aria-label='More Projects'>
                        See more about me
                    </a>
                </SeeMore>
            </AboutMeTabContainer>
        </div>
    );

}

export default AboutMe;