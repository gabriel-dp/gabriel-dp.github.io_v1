import { AboutMeTabContainer, MySelf, MyPhoto, MyDescription } from './styles';

import Header from '../Header';

const AboutMe = ({innerRef}) => {
    return (
        <div ref={innerRef}>
            <AboutMeTabContainer>
                <MySelf>
                    <MyDescription>
                        <Header bg={'dark'} align={'flex-start'} title={'About Me'} subtitle={'Who is Gabriel?'}/>
                        <p>A Enthusiastic of Robotics & Technology who started the developer career in 2019, during the High School with the Brazilian Robotics Olympiad (OBR). In addition to programming, I also have experience with Design and 3D Modeling due the F1 in Schools challenge.</p>
                    </MyDescription>
                    <MyPhoto>
                        <img src={require('../../assets/images/model.png')} alt='a handsome guy'/>
                    </MyPhoto>
                </MySelf>
            </AboutMeTabContainer>
        </div>
    );
}

export default AboutMe;