import { HeaderContainer, HeaderTitle, HeaderSubtitle } from './styles';

const Header = ({ title, subtitle, bg, bottom=4}) => {
    return (
        <HeaderContainer bottom={bottom}>
            <HeaderTitle bg={bg}>{title}</HeaderTitle>
            <HeaderSubtitle bg={bg}>{subtitle}</HeaderSubtitle>
        </HeaderContainer>
    );
}

export default Header;