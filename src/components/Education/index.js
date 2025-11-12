import styled from 'styled-components';
import { education } from '../../data/constants';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

const EducationWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Desc = styled.div`
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
    max-width: 750px;
`;

const EducationContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Qualification = styled.div`
    border: 0.1px solid ${({ theme }) => theme.primary};
    width: 600px;
    color: ${({ theme }) => theme.text_secondary + 'DD'};
    padding: 20px 40px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 370px;
        padding: 20px 36px;
        color: ${({ theme }) => theme.text_secondary + 'EE'};
        &:hover {
            max-height: fit-content;
        }
    }

    @media (max-width: 500px) {
        max-width: 310px;
        max-height: 280px;
        padding: 15px 30px;
        color: ${({ theme }) => theme.text_secondary + 'FF'};
        &:hover {
            max-height: fit-content;
        }
    }
`;

const School = styled.div`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    /* justify-content: center; */

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
        max-width: 330px;
    }
`;

const Degree = styled.div`
    font-weight: 400;
    font-size: 14px;
`;

const Duration = styled.div`
    font-weight: 500;
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

const Courses = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Span = styled.span`
    color: ${({ theme }) => theme.text_secondary};
    margin-right: 5px;
    font-size: 14px;
    font-weight: 600;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Grade = styled.div`
    width: 100%;
`;

export const Education = () => {
    return (
        <EducationWrapper>
            <Desc>{education?.desc}</Desc>
            <EducationContainer>
                        <Timeline style = {{padding: "0px"}}>
                        {
                            education?.data?.map((item, index) => (
                                <TimelineItem className = 'timelineItem'>
                                    <TimelineSeparator style = {{padding: "0px 12px 0px 0px"}}>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        {index !== (education?.data?.length - 1) && <TimelineConnector style={{ background: '#854CE6' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent style = {{padding: "0px", margin: "15px 0px"}}>
                                        <Qualification>
                                            <Top>
                                                <School>{item?.school}</School>
                                                <Degree>{item?.degree}</Degree>
                                                <Duration>{item?.duration}</Duration>
                                            </Top>
                                            <Grade>
                                                <Span>Grade: {item?.grade}</Span>
                                            </Grade>
                                            <Courses>
                                                <Span>Courses:</Span> 
                                                {(item?.courses).join(', ')}
                                            </Courses>
                                        </Qualification>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                        </Timeline>
                    </EducationContainer>
        </EducationWrapper>
    );
} 