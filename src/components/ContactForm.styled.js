import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  font-size: 14px;
  border-radius: 4px;
  padding: 0.8rem;
`;

export const Button = styled.button`
  font-size: 14px;
  border-radius: 4px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;
