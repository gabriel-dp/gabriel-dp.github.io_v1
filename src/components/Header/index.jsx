import { HeaderContainer, HeaderTitle, HeaderSubtitle } from './styles';

const Header = ({ title, subtitle, bg, align = 'center'}) => {
    return (
        <HeaderContainer align={align}>
            <HeaderTitle bg={bg}>{title}</HeaderTitle>
            <HeaderSubtitle bg={bg}>{subtitle}</HeaderSubtitle>
        </HeaderContainer>
    );
}

export default Header;