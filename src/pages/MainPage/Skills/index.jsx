import { SkillsTabContainer, SkillsClassContainer, SkillsClassTitle, IconsContainer, SingleSkill, SkillIcon, SkillName } from './styles';
import ICONS from './importIcons';

import Header from '../../../components/Header';

const Skills = ({innerRef}) => {
    return (
        <div ref={innerRef}>
            <SkillsTabContainer>
                <Header title={'Skills'} subtitle={'In progress...'}/>
                {
                    Object.keys(ICONS).map((title) => (
                        <SkillsClassContainer key={title}>
                            <SkillsClassTitle size={ICONS[title]['sizes']['title']}>{title}</SkillsClassTitle>
                            <IconsContainer>
                                {
                                    Object.keys(ICONS[title]).filter(function(value) {
                                        return value !== 'sizes';
                                    }).map(lang => (
                                        <SingleSkill key={lang} size={ICONS[title]['sizes']['icon']}>
                                            <SkillIcon className='skill' size={ICONS[title]['sizes']['icon']}>
                                                <img src={ICONS[title][lang]} alt={lang}/>
                                            </SkillIcon>
                                            <SkillName className='title'>{lang}</SkillName>
                                        </SingleSkill>
                                    ))
                                }
                            </IconsContainer>
                        </SkillsClassContainer>
                    ))
                }
            </SkillsTabContainer>
        </div>
    );
}

export default Skills;