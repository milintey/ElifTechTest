import styled from 'styled-components';
import { Field, Form } from 'formik';

export const InputForm = styled(Field)`
  font-size: 16px;
  display: block;
  height: 30px;
  width: 270px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-color: rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  margin-top: 5px;
  :focus {
    outline: none;
    border: 2px solid orangered;
  }
`;

export const LabelForm = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ButtonForm = styled.button`
  cursor: pointer;
  color: orangered;
  background-color: #fff;
  border: 2px solid orangered;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  width: 200px;
  height: 40px;

  :hover {
    border: none;
    color: white;
    background: orangered;
  }
`;

export const Forma = styled(Form)`
  margin-top: 40px;
`;

export const ValidationDiv = styled.div`
  width: 270px;
  padding-left: 10px;
  height: 20px;
  position: absolute;
  border-radius: 4px;
  background-color: red;
  color: white;
`;
