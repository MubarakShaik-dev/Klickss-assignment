import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #121212;
  color: #fff;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  background: url(${props => props.$backgroundImage}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px; /* Space for the fixed navbar */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay */
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DownloadButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff; /* White border */
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #4A90E2;
    border-color: #4A90E2;
    color: #fff;
  }
`;