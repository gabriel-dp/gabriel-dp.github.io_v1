import { CardContainer, ImageCover, DescriptionContainer, LanguageContainer } from './styles'

const GithubCard = ({ repoData, githubConfig }) => {
const repoUrl = `https://github.com/${githubConfig.username}/${repoData.name}/`;
    const repoCoverUrl = `https://raw.githubusercontent.com/${githubConfig.username}/${repoData.name}/main/cover/cover.png`

    return (
        <CardContainer target='_blanck' href={repoUrl}>
            <LanguageContainer className='language'>{repoData.language}</LanguageContainer>
            <DescriptionContainer className='description'>
                <h2>{repoData.name}</h2>
                <p>{repoData.description}</p>
            </DescriptionContainer>
            <ImageCover><img src={repoCoverUrl} alt='portfolio-cover'/></ImageCover>
        </CardContainer>
    );
}

export default GithubCard;