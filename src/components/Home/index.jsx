import { HomeTabContainer, MainTitle, Object3DContainer, StyledArrow } from './styles'

const Home = () => {
    return (
        <HomeTabContainer>
            <MainTitle>
                <h1>Gabriel de Paula</h1>
                <h3>Programming and 3D Modelling</h3>
            </MainTitle>
            <Object3DContainer/>
            <StyledArrow/>
        </HomeTabContainer>
    );
}

export default Home;