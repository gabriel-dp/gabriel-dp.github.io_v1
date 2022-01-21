import { HomeTabContainer, MainTitle, Object3DContainer, StyledArrow } from './styles'

const Home = ({goTo, innerRef, nextRef}) => {
    return (
        <div ref={innerRef}>
            <HomeTabContainer>
                <MainTitle>
                    <h1>Gabriel de Paula</h1>
                    <h3>Programming and 3D Modelling</h3>
                </MainTitle>
                <Object3DContainer/>
                <StyledArrow onClick={() => goTo(nextRef)}/>
            </HomeTabContainer>
        </div>
    );
}

export default Home;