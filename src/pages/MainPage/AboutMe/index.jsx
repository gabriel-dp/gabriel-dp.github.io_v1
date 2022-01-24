import Header from '../../../components/Header';
import SeeMore from '../../../components/SeeMore';

import { AboutMeTabContainer, MySelf, MyPhoto, MyDetails, SingleDetail, StyledIconFA , MyDescription} from './styles';
import { FaHourglassHalf, FaMapMarkerAlt, FaGraduationCap, FaBasketballBall  } from 'react-icons/fa';

const AboutMe = ({innerRef}) => {

    const myAge = parseInt((new Date() - new Date('06/19/2004')) / (1000*60*60*24*365));
    const phraseAge = `${myAge} years old`;

    const details = {
        'age' : {
            'icon' : <FaHourglassHalf/>,
            'text' : phraseAge,
        },
        'local' : {
            'icon' : <FaMapMarkerAlt/>,
            'text' : `Brazil  \xa0//\xa0  Vitória da Conquista - BA`
        },
        'education' : {
            'icon' : <FaGraduationCap/>,
            'text' : `Future Computer Scientist`
        },
        'hobby' : {
            'icon' : <FaBasketballBall/>,
            'text' : `Basketball player - 23`
        }
    }

    return (
        <div ref={innerRef}>
            <AboutMeTabContainer>
                <Header bg={'dark'} bottom={2} title={'About Me'} subtitle={'Who is Gabriel?'}/>
                <MySelf>
                    <MyDetails>
                        {
                            Object.keys(details).map(detail => (
                                <SingleDetail key={detail}>
                                    <StyledIconFA>
                                        {details[detail]['icon']}
                                    </StyledIconFA>
                                    <span>
                                        {details[detail]['text']}
                                    </span>
                                </SingleDetail>
                            ))
                        }
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