import IconsContact from '../IconsContact/IconsContact';
import { FooterTabContainer, WhoDid, FindMe } from './styles';

const Footer = () => {
    return (
        <FooterTabContainer>
            <WhoDid>
                <h3>Made with love and work by Gabriel de Paula.</h3>
                <h3>All rights reserved.</h3>
                <a target='_blanck' href='https://github.com/gabrieldp23/Portfolio'>Website source code</a>
            </WhoDid>
            <FindMe>
                <IconsContact/>
            </FindMe>
        </FooterTabContainer>
    );
}

export default Footer;