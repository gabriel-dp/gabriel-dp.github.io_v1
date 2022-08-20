import { CardContainer, ImageCover, DescriptionContainer, LanguageContainer, TagsContainer, TagItem, WebsiteButton } from './styles'
import { FaLink } from 'react-icons/fa';

const GithubCard = ({ repoData, githubConfig }) => {
    const repoUrl = `https://github.com/${githubConfig.username}/${repoData.name}/`;
    const repoCoverUrl = `https://raw.githubusercontent.com/${githubConfig.username}/${repoData.name}/main/docs/social-preview.png`

    return (
        <CardContainer target='_blanck' href={repoUrl}>
            <LanguageContainer className='language'>{repoData.language}</LanguageContainer>
            <DescriptionContainer className='description'>
                <div>
                    <h4>{repoData.name}</h4>
                    <p>{repoData.description}</p>
                </div>
                <TagsContainer>
                    {
                        repoData.tags.map((tag) => (
                            <TagItem key={tag}>{tag}</TagItem>
                        ))
                    }
                    {   
                        repoData.website !== '' ? 
                            <WebsiteButton 
                                aria-label="Visit website project"
                                onClick={(e) => {window.open(repoData.website, "_blanck"); e.preventDefault()}}
                            >
                                <FaLink/>
                            </WebsiteButton> 
                        : <></>
                    }
                </TagsContainer>
            </DescriptionContainer>
            <ImageCover><img src={repoCoverUrl} alt={`${repoData.name}-image`}/></ImageCover>
        </CardContainer>
    );
}

export default GithubCard;