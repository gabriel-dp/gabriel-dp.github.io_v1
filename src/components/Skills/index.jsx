import { SkillsTabContainer, SkillsClassTitle, IconsContainer, SkillIcon } from './styles';
import ICONS from './importIcons';

import Header from '../Header';

const Skills = ({innerRef}) => {

    return (
        <div ref={innerRef}>
            <SkillsTabContainer>
                <Header title={'Skills'} subtitle={'In progress...'}/>
                <SkillsClassTitle size={1.75}>Languages</SkillsClassTitle>
                <IconsContainer>
                    {
                        Object.keys(ICONS.langs).map(lang => (
                            <SkillIcon className='skill' key={lang} size={3.5}>
                                <img src={ICONS.langs[lang]} alt={lang} title={lang}/>
                            </SkillIcon>
                        ))
                    }
                </IconsContainer>
                <SkillsClassTitle size={1.5}>Frameworks & Libraries</SkillsClassTitle>
                <IconsContainer>
                    {
                        Object.keys(ICONS.fws).map(fw => (
                            <SkillIcon className='skill' key={fw} size={2.75}>
                                <img src={ICONS.fws[fw]} alt={fw} title={fw}/>
                            </SkillIcon>
                        ))
                    }
                </IconsContainer>
                <SkillsClassTitle size={1.25}>Others</SkillsClassTitle>
                <IconsContainer>
                    {
                        Object.keys(ICONS.others).map(other => (
                            <SkillIcon className='skill' key={other} size={2.25}>
                                <img src={ICONS.others[other]} alt={other} title={other}/>
                            </SkillIcon>
                        ))
                    }
                </IconsContainer>
            </SkillsTabContainer>
        </div>
    );
}

export default Skills;