import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormRegister = styled(Form)`
  border: 2px solid gray;
  border-radius: 40px;
  background: #c7c7c1;
  width: 400px;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  color: rgb(60, 216, 240);
`;

export const InputRegister = styled(Field)`
  width: 250px;
  border: 1px solid rgb(207, 207, 207);
  padding: 5px;
  font-size: 15px;
  outline: transparent;

  &:focus {
    border: 1px solid rgb(235, 129, 129);
  }
`;

export const ButtonRegister = styled.button`
  width: 100px;
  height: 35px;
  padding: 5px;
  background-color: white;
  border: 2px solid grey;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
     background-color: rgb(54, 184, 207);
  }
`;
