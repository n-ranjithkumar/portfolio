import styled from 'styled-components';
import { Title, Desc } from '../shared/StyledComponents';
import { contact } from '../../data/constants';
import { useRef, useState, useMemo, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SendHorizontal, CheckCircle2, XCircle } from 'lucide-react';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.form`
    background: ${({ theme }) => theme.card};
    border: 0.1px solid ${({ theme }) => theme.primary};
    border-radius: 16px;
    width: 50%;
    margin-top: 30px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 28px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 300px;
`;

const WrapperHeader = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const TextInput = styled.input`
    padding: 10px;
    font-size: 18px;
    background: transparent;
    border: 0.1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_secondary};
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    padding: 10px;
    font-size: 18px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_secondary};
    border-radius: 8px;
    resize: none;
    overflow-y: auto;
    outline: none;
    box-shadow: none;
    min-height: 100px;

    &:focus {
        border-color: ${({ theme }) => theme.primary};
        outline: none;
        box-shadow: 0 0 0 3px rgba(133, 76, 230, 0.15);
    }
`;

const SubmitButton = styled.button`
    padding: 10px 16px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.primary + 99};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
        background: ${({ theme }) => theme.primary + 55};
    }
`;

const MessageAlert = styled.div`
    padding: 12px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    background: ${({ type, theme }) => 
        type === 'success' 
            ? 'rgba(34, 197, 94, 0.1)' 
            : 'rgba(239, 68, 68, 0.1)'};
    color: ${({ type, theme }) => 
        type === 'success' 
            ? '#22c55e' 
            : '#ef4444'};
    border: 1px solid ${({ type, theme }) => 
        type === 'success' 
            ? 'rgba(34, 197, 94, 0.3)' 
            : 'rgba(239, 68, 68, 0.3)'};
    animation: slideDown 0.3s ease;
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ErrorText = styled.span`
    color: #ef4444;
    font-size: 14px;
    margin-top: 4px;
    padding-left: 10px;
    display: ${({ show }) => show ? 'block' : 'none'};
`;

const EmailInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Contact = () => {
    const form = useRef();

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);

    // Initialize EmailJS
    useEffect(() => {
        const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
        if (publicKey && !publicKey.includes('your_public_key')) {
            emailjs.init(publicKey);
        } else {
            console.warn('EmailJS Public Key is not configured. Please set REACT_APP_EMAIL_PUBLIC_KEY in your .env file. See EMAIL_SETUP.md for instructions.');
        }
    }, []);

    const isValidEmail = useMemo(() => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
        return emailRegex.test(userEmail.trim());
    }, [userEmail]);
    
    const allFilled = userName.trim() !== "" && userEmail.trim() !== "" && message.trim() !== "";
    const formValid = allFilled && isValidEmail;

    const showAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);
        setTimeout(() => {
            setAlertMessage(null);
            setAlertType(null);
        }, 5000);
    };

    function submitHandler(e) {
        e.preventDefault();
        if (!formValid || isSending) return;

        // Validate environment variables
        const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

        // Check if variables are missing or still have placeholder values
        const hasPlaceholder = 
            serviceId?.includes('your_service_id') || 
            templateId?.includes('your_template_id') || 
            publicKey?.includes('your_public_key');

        if (!serviceId || !templateId || !publicKey || hasPlaceholder) {
            const missingVars = [];
            if (!serviceId || serviceId?.includes('your_service_id')) missingVars.push('Service ID');
            if (!templateId || templateId?.includes('your_template_id')) missingVars.push('Template ID');
            if (!publicKey || publicKey?.includes('your_public_key')) missingVars.push('Public Key');
            
            showAlert(
                `Email service not configured. Missing: ${missingVars.join(', ')}. Please update your .env file with EmailJS credentials. See EMAIL_SETUP.md for instructions.`, 
                'error'
            );
            return;
        }

        setIsSending(true);
        setAlertMessage(null);
        
        emailjs.sendForm(
            serviceId,
            templateId, 
            form.current, 
            publicKey
        )
        .then((result) => {
            form.current.reset();
            setUserName("");
            setUserEmail("");
            setMessage("");
            setTouchedEmail(false);
            showAlert('Message sent successfully! I\'ll get back to you soon.', 'success');
        }, (error) => {
            console.error('EmailJS Error:', error);
            let errorMessage = 'Failed to send message. Please try again later.';
            
            if (error.text) {
                errorMessage = `Error: ${error.text}`;
            } else if (error.status === 0) {
                errorMessage = 'Network error. Please check your internet connection.';
            }
            
            showAlert(errorMessage, 'error');
        }).finally(() => setIsSending(false));
    };

    return (
        <Container id='contact'>
            <Title>{contact?.title}</Title>
            <Desc>{contact?.desc}</Desc>
            <Wrapper ref={form} onSubmit={submitHandler}>
                <WrapperHeader>{contact?.email_heading}</WrapperHeader>
                <TextInput 
                    type='text'
                    placeholder={contact?.input_placeholders[0]} 
                    required
                    name='user_name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <EmailInputWrapper>
                    <TextInput 
                        type='email'
                        placeholder='Email' 
                        required
                        name='user_email'
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        onBlur={() => setTouchedEmail(true)}
                        style={{
                            borderColor: touchedEmail && !isValidEmail ? '#ef4444' : undefined
                        }}
                    />
                    <ErrorText show={touchedEmail && !isValidEmail && userEmail.trim() !== ""}>
                        Please enter a valid email address
                    </ErrorText>
                </EmailInputWrapper>
                {contact?.text_placeholders?.map((item, index) => (
                    <TextArea 
                        key={index}
                        placeholder={item} 
                        required
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                ))}
                {alertMessage && (
                    <MessageAlert type={alertType}>
                        {alertType === 'success' ? (
                            <CheckCircle2 size={18} />
                        ) : (
                            <XCircle size={18} />
                        )}
                        {alertMessage}
                    </MessageAlert>
                )}
                <SubmitButton type='submit' disabled={!formValid || isSending}>
                    {isSending ? (
                        <>
                            Sending...
                            <SendHorizontal size={16} strokeWidth={0.5} />
                        </>
                    ) : (
                        <>
                            {contact?.button_content}
                            <SendHorizontal size={16} strokeWidth={3} />
                        </>
                    )}
                </SubmitButton>
            </Wrapper>
        </Container>
    );
};
