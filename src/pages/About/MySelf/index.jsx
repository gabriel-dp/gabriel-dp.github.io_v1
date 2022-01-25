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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum harum dolore! Quod inventore aliquid doloremque mollitia, ipsam soluta? Nesciunt!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates adipisci similique officia nemo ut.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum harum dolore! Quod inventore aliquid doloremque mollitia, ipsam soluta? Nesciunt!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates adipisci similique officia nemo ut.</p>
            </FullDescription>
        </MySelfTabContainer>
    );
}

export default MySelf;