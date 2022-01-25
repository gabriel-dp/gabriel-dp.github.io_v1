import Header from '../../../components/Header';
import ExpCard from './ExpCard';

import { ExperiencesContainer } from './styles';

const Experiences = () => {
    return(
        <ExperiencesContainer>
            <Header title='Experiences' subtitle='Projects & Competitions' bg='dark'/>
            <ExpCard/>
        </ExperiencesContainer>
    );
}

export default Experiences;