import Header from '../../../components/Header';
import SeeMore from '../../../components/SeeMore';
import PROJECTS from './projects';

import { ProjectsTabContainer, ProjectContainer, ProjectImage, ProjectDetails, ProjectTools, ProjectLink, StyledTilt } from './styles';
import { FaLink } from 'react-icons/fa';

const Projects = ({innerRef}) => {

    function handleClickButton (url) {
        window.open(url, '_blanck').focus();
    }

    return (
        <div ref={innerRef}>
            <ProjectsTabContainer>
                <Header title={'Projects'} subtitle={'My works'}/>
                {
                    Object.keys(PROJECTS).map((project, index) => (
                        <StyledTilt key={project}>
                            <ProjectContainer side={(index%2 === 0)}>
                                <ProjectImage>
                                    <img src={PROJECTS[project]['image']} alt={`${project}-work`}/>
                                    <ProjectLink onClick={() => handleClickButton(PROJECTS[project]['url'])}>
                                        View this project &nbsp;<FaLink/>
                                    </ProjectLink>
                                </ProjectImage>
                                <ProjectDetails>
                                    <div>
                                        <h3>{project}</h3>
                                        <h4>{PROJECTS[project]['subtitle']}</h4>
                                        <p>{PROJECTS[project]['description']}</p>
                                    </div>
                                    <ProjectTools>
                                        <h5>Tools used:</h5>
                                        {
                                            PROJECTS[project]['tools'].map((tool, index) => (
                                                <img key={tool} src={tool} alt={`tool-${index}`}/>
                                            ))  
                                        }
                                    </ProjectTools>
                                </ProjectDetails>
                            </ProjectContainer>
                        </StyledTilt>
                    ))
                }
                <SeeMore bg='switch' url='projects'>
                    <a>
                        See more projects
                    </a>
                </SeeMore>
            </ProjectsTabContainer>
        </div>
    );
}

export default Projects;