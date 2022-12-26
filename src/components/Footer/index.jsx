import IconsContact from '../IconsContact/';
import { FooterTabContainer, FooterContainer, WhoDid, FindMe } from './styles';

const Footer = () => {
    return (
        <FooterTabContainer>
            <FooterContainer>
                <WhoDid>
                    <span>Made with love and work by</span><span> Gabriel de Paula.</span>
                    <p>All rights reserved.</p>
                    <a aria-label='Source code' target='_blanck' href='https://github.com/gabriel-dp/gabriel-dp.github.io'>Website source code</a>
                </WhoDid>
                <FindMe>
                    <IconsContact/>
                </FindMe>
            </FooterContainer>
        </FooterTabContainer>
    );
}

export default Footer;