import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// --- ADDED: Import icons ---
import { FaGoogle, FaFacebookF, FaInstagram } from 'react-icons/fa';
// --- END ADDITION ---
import {
  FormContainer,
  FormTitle,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  FormLink,
  ErrorMessage,
  SuccessMessage,
  // --- ADDED: Import new styled components ---
  Divider,
  SocialIconsContainer,
  SocialIcon,
  // --- END ADDITION ---
} from './styles';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      const data = await register(email, password);
      setSuccess(data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect to login after 2 seconds
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create an Account</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Create Account</Button>
      </Form>
      
      {/* --- ADDED: Social Icons Section --- */}
      <Divider>
        <span>Or sign up with</span>
      </Divider>
      <SocialIconsContainer>
        <SocialIcon color="#DB4437" href="#"><FaGoogle /></SocialIcon>
        <SocialIcon color="#4267B2" href="#"><FaFacebookF /></SocialIcon>
        <SocialIcon color="#C13584" href="#"><FaInstagram /></SocialIcon>
      </SocialIconsContainer>
      {/* --- END ADDITION --- */}

      <FormLink>
        Already have an account? <a href="/login">Sign In</a>
      </FormLink>
    </FormContainer>
  );
};

export default Register;