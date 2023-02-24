import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 20px;
  border: 2px solid red;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  background-color: white;
  color: black;
  cursor: pointer;
`;
