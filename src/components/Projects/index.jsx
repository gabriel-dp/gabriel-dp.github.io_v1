import { useState, useEffect, useRef } from 'react';

import Header from '../Header';
import GithubCard from './GithubCard';

import { ProjectsTabContainer, CardsContainer, SeeMore } from './styles';

const Projects = () => {

    const githubConfig = {
        username: 'gabrieldp23',
        keyTopic: 'portfolio' 
    };
    
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        //requests data on start

        async function fetchAsync (url) {
            return await (await fetch(url)).json();
        }
        
        fetchAsync(`https://api.github.com/users/${githubConfig.username}/repos`).then(response => {
            setRepos(response);
        });
        
    }, [githubConfig.username])

    
    const [repositories, setRepositories] = useState([]);
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        class Repository {
            constructor (name, description, language) {
                this.name = name;
                this.description = description;
                this.language = language;
            }
        }

        var selectedRepos = []
        repos.map(repo => {
            repo['topics'].map(topic => {
                if (topic === githubConfig.keyTopic) {
                    selectedRepos.push(new Repository(repo['name'], repo['description'], repo['language']))
                }
            })
        });
        
        setRepositories(selectedRepos);

    }, [githubConfig.keyTopic, repos]);
    
    return (
        <ProjectsTabContainer>
            <Header title={'Projects'} subtitle={'From Github'}/>
            <CardsContainer>
                {
                    repositories.map(repo => (
                        <GithubCard
                            key={repo.name}
                            repoData={repo}
                            githubConfig={githubConfig}
                        />
                    ))
                }
            </CardsContainer>
            <SeeMore>
                <a target='_blanck' href='https://github.com/gabrieldp23?tab=repositories'>
                    See more projects
                </a>
            </SeeMore>
        </ProjectsTabContainer>
    );
}

export default Projects;