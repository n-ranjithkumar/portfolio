import styled from 'styled-components';

export const Title = styled.div`
    font-weight: 600;
    font-size: 42px;
    text-align: center;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 760px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    max-width: 600px;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Technologies = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const Technology = styled.div`
    font-size: 12px;
    color: #000000;
    background-color: ${({ theme }) => theme.primary + 20};
    border-radius: 16px;
    padding: 5px 10px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-weight: 600;
    }

    @media (max-width: 500px) {
        font-weight: 600;
    }
`;