import MyPhoto from '../../../components/MyPhoto';
import Header from '../../../components/Header';

import { MySelfTabContainer, PhotoAndName, HeaderDiv, FullDescription } from './styles';

const MySelf = () => {
    return (
        <MySelfTabContainer>
            <PhotoAndName>
                <MyPhoto size={23} className='main'/>
                <HeaderDiv>
                    <Header title='Gabriel de Paula' subtitle='Math' bg='dark' bottom={0} className='main'/>
                </HeaderDiv>
            </PhotoAndName>
            <FullDescription>
                <p>My name is Gabriel de Paula Meira, but some people call me "Math" or "Gabs".</p>
                <p>Developer and 3D modeler from Brazil, born in São Paulo/SP, but current living in São João Del Rei/MG.</p>
                <p>I've always been great at math, but only when I was 14 years old I entered at Sesi School and was able to participate of robotics competitions, working together with other people to achieve a goal to the team. At this time I figured out my vocation to programming</p>
                <p>I'm a person with many personal goals, my nexts are complete the University curriculum and start to job. My carrer is just beginning, effort and dedication will not lack.</p>
            </FullDescription>
        </MySelfTabContainer>
    );
}

export default MySelf;