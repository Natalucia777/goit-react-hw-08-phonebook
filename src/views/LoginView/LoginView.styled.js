import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormLogin = styled(Form)`
  border: 2px solid grey;
  border-radius: 40px;
  background: rgb(2, 48, 85);
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
`;
export const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  color: #fff;
`;
export const InputLogin = styled(Field)`
  width: 250px;
  border: 1px solid rgb(207, 207, 207);
  padding: 5px;
  font-size: 15px;
  outline: transparent;

  &:focus {
    border: 1px solid rgb(235, 129, 129);
  }
`;
export const ButtonLogin = styled.button`
  width: 100px;
  height: 35px;
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
