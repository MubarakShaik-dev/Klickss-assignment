import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  LogoutButton,
  RightSection
} from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/dashboard')}>Klickks</Logo>
      <RightSection>
        <NavLinks>
          <NavLink href="#">Customer</NavLink>
          <NavLink href="#">Photographer</NavLink>
          <NavLink href="#">About Company</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavLinks>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;