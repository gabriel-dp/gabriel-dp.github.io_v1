import Header from '../../../components/Header';
import ExpCard from './ExpCard';

import { ExperiencesContainer } from './styles';

const Experiences = () => {

    const competitions = {
        'OBR (Brazilian Robotics Olympiad)' : {
            'time' : '2019 - 2021',
            'achievement' : '4th place Nationals (2020)',
            'logo' : require('../../../assets/images/exp/obr-logo.png'),
            'image' : require('../../../assets/images/exp/obr.jpg'),
            'description' : 'Lorem ipsum dolor sit amet'
        },
        'F1 in Schools' : {
            'time' : '2019 - 2021',
            'achievement' : '2nd place Nationals 2021',
            'logo' : require('../../../assets/images/exp/f1inschools-logo.png'),
            'image' : require('../../../assets/images/exp/f1inschools.jpg'),
            'description' : 'World Finals on May/2022'
        },
        'ANICON' : {
            'time' : 'September, 2019',
            'achievement' : '1st place',
            'logo' : require('../../../assets/images/exp/anicon-logo.png'),
            'image' : require('../../../assets/images/exp/anicon.jpg'),
            'description' : 'Lorem ipsum dolor sit amet'
        },
        'HACKATHON AEB' : {
            'time' : 'September, 2020',
            'achievement' : '1st place',
            'logo' : require('../../../assets/images/exp/aeb-logo.png'),
            'image' : require('../../../assets/images/exp/aeb.png'),
            'description' : 'Lorem ipsum dolor sit amet'
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
                    />
                ))
            }
        </ExperiencesContainer>
    );
}

export default Experiences;