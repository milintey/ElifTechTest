import styled from 'styled-components';
import { Field } from 'formik';

export const FormButton = styled.button`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
`;

export const FormInput = styled(Field)`
  height: 30px;
  width: 200px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  margin-right: ${p => p.theme.space[4]}px;
  :focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;

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
  margin-bottom: 15px;
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
  width: 150px;
  height: 40px;
`;
