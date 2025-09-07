import React from 'react';
import Navbar from '../Navbar'; // Import the new Navbar component
import {
  DashboardContainer,
  HeroSection,
  HeroContent,
  MainTitle,
  SubTitle,
  Description,
  DownloadButton
} from './styles';
import bgImage from '../../assets/images/image2.jpg'; // Using image1 as background

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar /> {/* Render the Navbar here */}
      
      <HeroSection $backgroundImage={bgImage}>
        <HeroContent>
          <MainTitle>Making your moment,</MainTitle>
          <SubTitle>Picture Perfect!</SubTitle>
          <Description>
            Klickks, the only platform you need to book photographers for any events.
          </Description>
          <DownloadButton>DOWNLOAD KLICKKS APP</DownloadButton>
        </HeroContent>
      </HeroSection>

      {/* You can add more dashboard content here below the hero section */}
    </DashboardContainer>
  );
};

export default Dashboard;