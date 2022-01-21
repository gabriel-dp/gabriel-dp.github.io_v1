import { AboutMeTabContainer, MySelf, MyPhoto, MyDescription } from './styles';

import Header from '../Header';

const AboutMe = () => {
    return (
        <AboutMeTabContainer>
            <MySelf>
                <MyDescription>
                    <Header bg={'dark'} align={'flex-start'} title={'About Me'} subtitle={'Who is Gabriel?'}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur ipsam error in perspiciatis adipisci animi commodi magni dicta illum autem, ad libero beatae ratione vitae incidunt obcaecati nobis. Odio, ducimus? Recusandae explicabo eaque iure est delectus eos itaque perspiciatis vero quas sed officiis quod voluptate soluta aperiam, impedit expedita?</p>
                </MyDescription>
                <MyPhoto>
                    <img src={require('../../assets/images/model.png')}/>
                </MyPhoto>
            </MySelf>
        </AboutMeTabContainer>
    );
}

export default AboutMe;