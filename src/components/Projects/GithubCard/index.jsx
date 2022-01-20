import { CardContainer, ImageCover, DescriptionContainer, LanguageContainer } from './styles'

const GithubCard = ({ repoData, githubConfig }) => {
    return (
        <CardContainer>
            <LanguageContainer className='language'>{repoData.language}</LanguageContainer>
            <DescriptionContainer className='description'>
                <h2>{repoData.name}</h2>
                <p>{repoData.description}</p>
            </DescriptionContainer>
            <ImageCover><img src='https://www.montegomarmores.com.br/images/innovatech/cement-light-gray-2D.jpg' alt='portfolio-cover'/></ImageCover>
        </CardContainer>
    );
}

export default GithubCard;