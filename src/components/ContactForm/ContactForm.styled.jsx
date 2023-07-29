import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrap = styled(Form)`
  background-color: rgb(2, 48, 85);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
`;

export const StLabel = styled.label`
  margin-bottom: 10px;
  color: #fff;

  &:last-child {
  margin-bottom: 0px;
  }
`;

export const Input = styled(Field)`
  margin-left: 28px;
  width: 250px;
  border: 1px solid rgb(207, 207, 207);
  padding: 5px;
  font-size: 15px;
  outline: transparent;

  &:focus {
    border: 1px solid rgb(235, 129, 129);
`;

export const FormButton = styled.button`
  width: 100px;
  height: 50px;
  padding: 5px;
  background-color: white;
  border: 2px solid grey;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(54, 184, 207);
  }
`;
