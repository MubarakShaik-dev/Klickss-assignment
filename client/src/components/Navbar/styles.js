import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #000; /* Black background as in the image */
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: fixed; /* Keep Navbar at the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it's above other content */
`;

export const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  cursor: pointer;
  
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; /* Space between nav links and logout button */
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 1rem; /* Space before logout button */

  @media (max-width: 768px) {
    display: none; /* Hide nav links on smaller screens if needed */
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #4A90E2; /* Highlight color on hover */
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent; /* Transparent background */
  border: 1px solid #fff; /* White border */
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4A90E2; /* Blue background on hover */
    border-color: #4A90E2;
    color: #fff;
  }
`;