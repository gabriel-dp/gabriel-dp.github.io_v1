import { FooterTabContainer, WhoDid, FindMe, SocialMedia } from './styles';
import ICONS from './importIcons';

const Footer = () => {
    return (
        <FooterTabContainer>
            <WhoDid>
                <h3>Made with love and work by Gabriel de Paula.</h3>
                <h3>All rights reserved.</h3>
                <a target='_blanck' href='URL HERE'>Website source code</a>
            </WhoDid>
            <FindMe>
                {
                    Object.keys(ICONS).map(url => (
                        <a key={url} target='_blanck' href={url}>
                            <img src={ICONS[url]} alt={ICONS[url]}/>
                        </a>
                    ))
                }
            </FindMe>
        </FooterTabContainer>
    );
}

export default Footer;