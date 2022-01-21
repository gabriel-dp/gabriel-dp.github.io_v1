import { HeaderContainer, HeaderTitle, HeaderSubtitle } from './styles';

const Header = ({ title, subtitle, bg }) => {
    return (
        <HeaderContainer>
            <HeaderTitle bg={bg}>{title}</HeaderTitle>
            <HeaderSubtitle bg={bg}>{subtitle}</HeaderSubtitle>
        </HeaderContainer>
    );
}

export default Header;