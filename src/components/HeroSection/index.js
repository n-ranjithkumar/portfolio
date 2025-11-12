import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/HeroSection/HeroImg.jpg';
import { FaDownload } from 'react-icons/fa';
import { Tilt } from 'react-tilt';
import { useState, useEffect } from 'react';

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;


export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 150px;
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const ImgWrapper = styled.div`
  padding: 6px;
  border-radius: 50%;
  background: ${({ loaded, theme }) => 
    loaded 
      ? 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)' 
      : 'transparent'};
  display: inline-block;
  width: fit-content;
  transition: background 0.3s ease;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;  /* Increased from 400px */
  max-height: 450px;
  min-width: 280px;  /* Ensures minimum size */
  min-height: 280px;
  border-radius: 40%;  /* Slightly less circular */
  border: 3px solid ${({ theme }) => theme.primary};  /* Thicker border */
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  object-fit: cover;
  object-position: center top;
  display: block;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1200px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
    object-position: center 20%;
  }

  @media (max-width: 640px) {
    max-width: 300px;
    max-height: 300px;
    min-width: 250px;
    min-height: 250px;
    object-position: center 20%;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    max-height: 280px;
    object-position: center 20%;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 18px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(225deg, #8b5cf6 0%, #d946ef 100%);
  transition: all 0.3s ease;
  border: none;

  /* Subtle glow instead of dark shadow */
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(139, 92, 246, 0.2);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;


const defaultOptions = {
  reverse: false,
  max: 8,
  perspective: 1000,
  scale: 1.01,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image immediately on component mount
    const img = new Image();
    img.src = HeroImg;
    
    // If image is already cached, set loaded immediately
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => {
        setImageLoaded(true);
      };
      img.onerror = () => {
        // Even on error, show the image (browser will handle it)
        setImageLoaded(true);
      };
    }
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank'>
              Resume
              <FaDownload style={{ padding: "0px 5px" }} size={25} />
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Tilt options={defaultOptions}>
              <ImgWrapper loaded={imageLoaded}>
                <Img 
                  src={HeroImg} 
                  alt="hero-image" 
                  loaded={imageLoaded}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setImageLoaded(true)}
                />
              </ImgWrapper>
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};