import React from 'react';
import { Outlet } from 'react-router-dom';
import Carousel from '../Carousel';
import { LayoutContainer, LeftPanel, RightPanel } from './styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <LeftPanel>
        <Carousel />
      </LeftPanel>
      <RightPanel>
        <Outlet /> {/* This will render Login or Register component */}
      </RightPanel>
    </LayoutContainer>
  );
};

export default Layout;