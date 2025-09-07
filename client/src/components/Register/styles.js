import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #ccc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #4A90E2;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #357ABD;
  }
`;

export const FormLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #ccc;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.p`
  background-color: #ff4d4d;
  color: white;
  padding: 0.75rem;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  background-color: #4caf50;
  color: white;
  padding: 0.75rem;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1rem;
`;

// --- ADDED: New Styles for Social Icons ---
export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #888;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #444;
  }

  & span {
    padding: 0 10px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: 1px solid #555;
  border-radius: 50%;
  color: #ccc;
  font-size: 1.2rem;
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: ${(props) => props.color || '#fff'};
    border-color: ${(props) => props.color || '#fff'};
  }
`;
