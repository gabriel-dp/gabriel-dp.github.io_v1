import { CardContainer, ImageCover, DescriptionContainer, LanguageContainer, TagsContainer, TagItem, WebsiteButton } from './styles'
import { faLink } from '@fortawesome/free-solid-svg-icons';

const GithubCard = ({ repoData, githubConfig }) => {
    const repoUrl = `https://github.com/${githubConfig.username}/${repoData.name}/`;
    const repoCoverUrl = `https://raw.githubusercontent.com/${githubConfig.username}/${repoData.name}/main/cover/cover.png`

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
                    {repoData.website !== '' ? <WebsiteButton onClick={(e) => {window.open(repoData.website, "_blanck"); e.preventDefault()}} icon={faLink}/> : <></>}
                </TagsContainer>
            </DescriptionContainer>
            <ImageCover><img src={repoCoverUrl} alt='portfolio-cover'/></ImageCover>
        </CardContainer>
    );
}

export default GithubCard;