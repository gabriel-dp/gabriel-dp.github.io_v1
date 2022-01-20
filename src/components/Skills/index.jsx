import { SkillsTabContainer, SkillsClassTitle, IconsContainer, SkillIcon } from './styles';
import ICONS from './importIcons';

import Header from '../Header';

const Skills = () => {

    return (
        <SkillsTabContainer>
            <Header title={'Skills'} subtitle={'In progress...'}/>
            <SkillsClassTitle>Languages</SkillsClassTitle>
            <IconsContainer>
                {
                    Object.keys(ICONS.langs).map(lang => (
                        <SkillIcon className='skill' key={lang} size={3.5}>
                            <img src={ICONS.langs[lang]}/>
                        </SkillIcon>
                    ))
                }
            </IconsContainer>
            <SkillsClassTitle>Frameworks & Libraries</SkillsClassTitle>
            <IconsContainer>
                {
                    Object.keys(ICONS.fws).map(fw => (
                        <SkillIcon className='skill' key={fw} size={2.75}>
                            <img src={ICONS.fws[fw]}/>
                        </SkillIcon>
                    ))
                }
            </IconsContainer>
            <SkillsClassTitle>Others</SkillsClassTitle>
            <IconsContainer>
                {
                    Object.keys(ICONS.others).map(other => (
                        <SkillIcon className='skill' key={other} size={2}>
                            <img src={ICONS.others[other]}/>
                        </SkillIcon>
                    ))
                }
            </IconsContainer>
        </SkillsTabContainer>
    );
}

export default Skills;