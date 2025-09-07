import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0d0d0d;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;