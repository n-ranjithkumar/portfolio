import styled from 'styled-components';
import { skills } from '../../data/constants';
import { Title, Desc} from '../shared/StyledComponents';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.bg};
    gap: 12px;
`;


export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
`;

export const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background: ${({ theme }) => theme.card_glass};
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid ${({ theme }) => theme.primary + '30'};
    border-radius: 24px;
    padding: 28px 40px;
    box-shadow: ${({ theme }) => theme.shadow_md};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: visible;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${({ theme }) => theme.gradient_primary};
        transform: scaleX(0);
        transition: transform 0.4s ease;
    }
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.shadow_lg}, ${({ theme }) => theme.shadow_glow};
        border-color: ${({ theme }) => theme.primary + '60'};
    }
    
    &:hover::before {
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        max-width: 400px;
        padding: 24px 32px;
    }

    @media (max-width: 500px) {
        max-width: 330px;
        padding: 20px 28px;
    }
`;

export const SkillTitle = styled.div`
    font-weight: 700;
    font-size: 28px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: -0.5px;
    display: block;
    width: 100%;
    line-height: 1.2;
    
    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 18px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
        margin-bottom: 16px;
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    gap: 12px;
    width: 100%;
`;

export const SkillItem = styled.div`
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 20px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.primary + '30'};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: ${({ theme }) => theme.primary + '08'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    white-space: nowrap;
    overflow: visible;
    min-height: fit-content;
    
    &:hover {
        transform: translateY(-3px) scale(1.05);
        background: ${({ theme }) => theme.primary + '20'};
        border-color: ${({ theme }) => theme.primary};
        box-shadow: ${({ theme }) => theme.shadow_sm};
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 16px;
        gap: 8px;
        min-height: 44px;
    }

    @media (max-width: 500px) {
        font-size: 13px;
        padding: 8px 14px;
        gap: 6px;
        min-height: 40px;
    }
`;

export const SkillImage = styled.img`
    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
    max-width: 28px;
    max-height: 28px;
    object-fit: contain;
    object-position: center;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    display: block;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    
    ${SkillItem}:hover & {
        transform: scale(1.2) rotate(5deg);
    }

    @media (max-width: 768px) {
        width: 26px;
        height: 26px;
        min-width: 26px;
        min-height: 26px;
        max-width: 26px;
        max-height: 26px;
    }

    @media (max-width: 500px) {
        width: 22px;
        height: 22px;
        min-width: 22px;
        min-height: 22px;
        max-width: 22px;
        max-height: 22px;
    }
`;

export const Skills = () => {
    return (
        <Container id = "skills">
            <Wrapper>
                <Title>{skills.title}</Title>
                <Desc>{skills.desc}</Desc>
                <SkillsContainer>
                    {
                        skills.data.map((item, index) => (
                            <Skill key = {index}>
                                <SkillTitle>{item.skillTitle}</SkillTitle>
                                <SkillList>
                                    {
                                        item.skillList.map((skill, idx) => (
                                            <SkillItem key = {idx}>
                                                {skill.image && <SkillImage src = {skill.image} alt = ""/>}
                                                {skill.name}
                                            </SkillItem>
                                        ))
                                    }
                                </SkillList>
                            </Skill>
                        ))
                    }
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
}