import Header from '../../../components/Header';
import SeeMore from '../../../components/SeeMore';
import PROJECTS from './projects';

import { ProjectsTabContainer, ProjectContainer, ProjectImage, ProjectDetails, ProjectTools, ProjectLink } from './styles';
import { FaLink } from 'react-icons/fa';

const Projects = ({innerRef}) => {
    return (
        <div ref={innerRef}>
            <ProjectsTabContainer>
                <Header title={'Projects'} subtitle={'My works'}/>
                {
                    Object.keys(PROJECTS).map((project, index) => (
                        <ProjectContainer side={(index%2 === 0)}>
                            <ProjectImage>
                                <img src={PROJECTS[project]['image']} alt={`${project}-image`}/>
                                <ProjectLink>
                                        View this project &nbsp;<FaLink/>
                                    </ProjectLink>
                            </ProjectImage>
                            <ProjectDetails>
                                <h3>{project}</h3>
                                <h4>{PROJECTS[project]['subtitle']}</h4>
                                <p>{PROJECTS[project]['description']}</p>
                                <ProjectTools>
                                    <h5>Tools used:</h5>
                                    {
                                        PROJECTS[project]['tools'].map((tool, index) => (
                                            <img src={tool} alt={`tool-${index}`}/>
                                            ))  
                                        }
                                </ProjectTools>
                            </ProjectDetails>
                        </ProjectContainer>
                    ))
                }
                <SeeMore>
                    <a aria-label='More Projects' target='_blanck' href='https://github.com/gabrieldp23?tab=repositories'>
                        See more projects
                    </a>
                </SeeMore>
            </ProjectsTabContainer>
        </div>
    );
}

export default Projects;