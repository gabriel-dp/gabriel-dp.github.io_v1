import Header from '../../../components/Header';
import { EducationContainer, TimeLine, GraduationContainer, Graduation, GraduationData, InstitutionLogo, MiddleCircle, MiddleTimeLine } from './styles';

const Education = () => {

    const graduations = {
        'University' : {
            'institution' : 'Universidade Federal de São João Del Rei',
            'institution-logo' : require('../../../assets/images/ufsj.png'),
            'time' : '2022 - Now',
            'side' : 'left',
        },
        'High School' : {
            'institution' : 'Escola Sesi Anísio Teixeira',
            'institution-logo' : require('../../../assets/images/sesi.png'),
            'time' : '2019 - 2021',
            'side' : 'right',
        },
    }

    return (
        <EducationContainer>
            <Header title='Education' subtitle='In progress...'/>
            <TimeLine>
                {
                    Object.keys(graduations).map((graduation) => (
                        <GraduationContainer key={graduation}>
                            <Graduation className={graduations[graduation]['side']}>
                                <GraduationData>
                                    <h5>{`${graduations[graduation]['time']}`}</h5>
                                    <h3>{graduation}</h3>
                                    <h4>{graduations[graduation]['institution']}</h4>
                                </GraduationData>
                                <InstitutionLogo 
                                    src={graduations[graduation]['institution-logo']}
                                    alt={`${graduations[graduation]['institution']}-logo`}
                                />
                                <MiddleCircle/>
                            </Graduation>
                            <MiddleTimeLine/>
                        </GraduationContainer>
                    ))
                }       
            </TimeLine>
        </EducationContainer>
    );    
}

export default Education;

/*
*/