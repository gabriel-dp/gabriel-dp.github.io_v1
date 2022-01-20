import { HeaderContainer, HeaderTitle, HeaderSubtitle } from './styles';

const Header = ({ title, subtitle }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </HeaderContainer>
    );
}

export default Header;