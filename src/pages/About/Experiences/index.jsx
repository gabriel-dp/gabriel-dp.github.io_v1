import Header from '../../../components/Header';
import ExpCard from './ExpCard';

import { ExperiencesContainer } from './styles';

const Experiences = () => {

    const competitions = {
        'OBR' : {
            'time' : '2019 - 2021',
            'achievement' : '4th place Nationals (2020)',
            'logo' : require('../../../assets/images/exp/obr-logo.png'),
            'image' : require('../../../assets/images/exp/obr.jpg'),
            'description' : 'My first programming contact, the Brazilian Robotics Olympiad, was an incredible experience, I was able for the first time to work with a team to achieve a goal, learning as much as I could along that time with Death Punch and D4RKMODE. \nA lot awards were received in the three years which I was there: 3rd place State (2019) | 1st place State and 4th place Nationals (2020) | 1st place State (2021).',
            'link': 'http://sesi.fieb.org.br/sesiescola/nossas-escolas/vitória-da-conquista/blog-da-escola/',
        },
        'F1 in Schools' : {
            'time' : '2019 - 2021',
            'achievement' : '2nd place Nationals 2021',
            'logo' : require('../../../assets/images/exp/f1inschools-logo.png'),
            'image' : require('../../../assets/images/exp/f1inschools.jpg'),
            'description' : 'Another competition, that time no robots, but F1. In F1 in Schools, SwordFish (my team), was challenged to project, test, build and race with a F1 car in miniature, working in areas of Marketing and Project Management, also presenting all the work to the judges. The achievements are: 2nd place State and 5th place Nationals (2020) | 2nd place Nationals (2021) and classified to the World Finals 2022, that will happen on May, stay on!',
            'link': 'http://sesi.fieb.org.br/sesiescola/noticias/equipe-baiana-premiada-no-torneio-sesi-de-robótica-vai-para-competição-internacional-em-2022/',
        },
        'ANICON' : {
            'time' : 'September, 2019',
            'achievement' : '1st place',
            'logo' : require('../../../assets/images/exp/anicon-logo.png'),
            'image' : require('../../../assets/images/exp/anicon.jpg'),
            'description' : 'ANICON is a traditional regional event which mixes geek culture and technology, the novelty in 2019 was the robotics contests in partnership with Casa da Robótica. My team (StrangerBots404), made up by 3 great friends, won the category "Fastest LEGO Line Follower", and the reward of R$402,00.',
            'link': 'https://www.aniconfestival.com/campeonato-robotica',
        },
        'Hackathon AEB' : {
            'time' : 'September, 2020',
            'achievement' : '1st place',
            'logo' : require('../../../assets/images/exp/aeb-logo.png'),
            'image' : require('../../../assets/images/exp/aeb.png'),
            'description' : 'In the hackathon of the Brazilian Space Agency, the competitors had to program a entire code for a space rover in the moon, which must follow a track, avoid obstacles and deal with terrain unevenness, all that on the sBotics Simulator. I had to participate alone of this contest, but this wasn not a obstacle for me',
            'link': 'https://www.gov.br/aeb/pt-br/assuntos/noticias/equipe-de-vitoria-da-conquista-ba-vence-hackathon-espacial-da-aeb',
        }
    }

    return(
        <ExperiencesContainer>
            <Header title='Experiences' subtitle='Projects & Competitions' bg='dark'/>
            {
                Object.keys(competitions).map((competition) => (
                    <ExpCard
                        key={competition}
                        title={competition}
                        time={competitions[competition]['time']}
                        achievement={competitions[competition]['achievement']}
                        logo={competitions[competition]['logo']}
                        image={competitions[competition]['image']}
                        description={competitions[competition]['description']}
                        link={competitions[competition]['link']}
                    />
                ))
            }
        </ExperiencesContainer>
    );
}

export default Experiences;