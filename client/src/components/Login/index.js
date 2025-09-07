import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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
} from '../Register/styles'; // Re-using styles from Register

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Sign In</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <Button type="submit">Sign In</Button>
      </Form>
      <FormLink>
        Don't have an account? <a href="/register">Sign Up</a>
      </FormLink>
    </FormContainer>
  );
};

export default Login;