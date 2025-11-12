import '../../App.css';
import styled from 'styled-components';
import { experience } from '../../data/constants';
import { Desc, Technologies, Technology } from '../shared/StyledComponents';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';
import { Education } from '../Education';

const Container = styled.div`
    width: 100%;
    padding: 20px 12px;
    margin-top: 80px;
`;

const NavigateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    gap: 14px;
    border-radius: 16px;
    background: ${({ theme }) => theme.card_light};
    border: 1px solid ${({ theme }) => theme.primary + 30};
    width: fit-content;
    margin: 0 auto 32px auto; /* horizontally center with extra bottom space */
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    backdrop-filter: saturate(130%) blur(2px);

    @media (min-width: 960px) {
        gap: 18px; /* a bit more space on desktop */
    }
`;

const ExperienceButton = styled.button`
    background: ${({ $active, theme }) => ($active ? theme.primary : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.white : theme.text_secondary)};
    padding: 12px 18px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    font-size: 28px;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    box-shadow: ${({ $active }) => ($active ? '0 10px 26px rgba(133,76,230,0.35)' : 'none')};
    outline: none;
    &:focus-visible { box-shadow: 0 0 0 3px rgba(133,76,230,0.3); }

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 22px;
    }

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;

const EducationButton = styled.button`
    background: ${({ $active, theme }) => ($active ? theme.primary : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.white : theme.text_secondary)};
    padding: 12px 18px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    font-size: 28px;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    box-shadow: ${({ $active }) => ($active ? '0 10px 26px rgba(133,76,230,0.35)' : 'none')};
    outline: none;
    &:focus-visible { box-shadow: 0 0 0 3px rgba(133,76,230,0.3); }

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 22px;
    }

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ExperienceContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const WorkDesc = styled.ul`
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const WorkExperience = styled.div`
    border: 0.1px solid ${({ theme }) => theme.primary};
    width: 600px;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.card_light};
    padding: 20px 40px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.18);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }

    &:hover ${WorkDesc} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }


    @media (max-width: 768px) {
        max-width: 400px;
        padding: 20px 36px;
    }

    @media (max-width: 500px) {
        max-width: 310px;
        padding: 15px 30px;
    }
`;

const Role = styled.div`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    /* justify-content: center; */

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
        max-width: 330px;
    }
`;

const Org = styled.div`
    font-weight: 400;
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 14px;
    /* justify-content: center; */
`;

const Duration = styled.div`
    font-weight: 500;
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 12px;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-weight: 600;
        font-size: 13px;
        opacity: 1;
    }

    @media (max-width: 500px) {
        font-weight: 600;
        font-size: 12px;
        opacity: 1;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
`;

const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin-top: 5px;
`;

const TopContent = styled.div`
    width: 100%;
`;

const WorkDescItem = styled.li`
    width: 100%;
`;

const Certficate = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    width: fit-content;
    padding-right: 8px;
    border-radius: 16px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
`;

const CertificateImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 16px;
`;

const CertificateLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-weight: 600;
        opacity: 1;
    }

    @media (max-width: 500px) {
        font-weight: 600;
        opacity: 1;
    }
`;

export const Experience = () => {
    const [displayEducation, setDisplayEducation] = useState(false);

    function educationHandler() {
        setDisplayEducation(true);
    }

    function experienceHandler() {
        setDisplayEducation(false);
    }

    return (
        <Container id = "experience">
            <NavigateContainer>
                <ExperienceButton onClick = {experienceHandler}
                $active={!displayEducation}>
                    Experience
                </ExperienceButton>
                <EducationButton onClick = {educationHandler}
                $active={displayEducation}>
                    Education
                </EducationButton>
            </NavigateContainer>
            {
                displayEducation ? <Education /> :
                (
                <Wrapper>
                    <Desc>{experience.desc}</Desc>
                    <ExperienceContainer>
                        <Timeline style = {{padding: "0px"}}>
                        {
                            experience?.data?.map((item, index) => (
                                <TimelineItem className = 'timelineItem'>
                                    <TimelineSeparator style = {{padding: "0px 12px 0px 0px"}}>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        {index !== (experience?.data?.length - 1) && <TimelineConnector style={{ background: '#854CE6' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent style = {{padding: "0px", margin: "15px 0px"}}>
                                        <WorkExperience>
                                            <Top>
                                                <Image src = {item?.image} alt = {item?.org + '.png'}/>
                                                <TopContent>
                                                    <Role>{item?.role}</Role>
                                                    <Org>{item?.org}</Org>
                                                    <Duration>{item?.date}</Duration>
                                                </TopContent>
                                            </Top>
                                            <Technologies>
                                                {
                                                    item?.technologies.map((tech, index) => (
                                                        <Technology key = {index}>
                                                            {tech}
                                                        </Technology>
                                                    ))
                                                }
                                            </Technologies>
                                            <WorkDesc>
                                                {
                                                    item?.contribution?.split(".").slice(0, -1).map((line, idx) => (
                                                        <WorkDescItem key = {idx}>
                                                            {line}.
                                                        </WorkDescItem>
                                                    ))
                                                }
                                                <Certficate>
                                                    <CertificateImage
                                                    src = {item?.certificate?.image} 
                                                    alt = 'certificate.png'/>
                                                    <CertificateLink
                                                    href = {item?.certificate?.link}
                                                    target = '_blank'>
                                                        Certficate
                                                    </CertificateLink>
                                                </Certficate>
                                            </WorkDesc>
                                        </WorkExperience>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                        </Timeline>
                    </ExperienceContainer>
                </Wrapper>
                )
            }
        </Container>
    );
}