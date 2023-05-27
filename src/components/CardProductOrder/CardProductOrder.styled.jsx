import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 193px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12), 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const Image = styled.img`
  margin-bottom: 25px;
  border-radius: 10px;
  width: 90px;
  height: 90px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0px;
  margin-bottom: 10px;
`;

export const ButtonCard = styled.button`
  cursor: pointer;
  width: 80px;
  height: 36px;
  font-size: 15px;
  font-weight: 600;
  color: orangered;

  background: #fff;
  border: 2px solid orangered;
  border-radius: 4px;

  :hover {
    border: none;
    color: white;
    background: orangered;
  }
`;

export const TextCard = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0px 0px 15px;
`;

export const NumberInput = styled.input`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: black;
  width: 25px;
  height: 25px;
  font-size: 16px;
  outline: none;
  border: 2px solid orangered;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IncrementButton = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  font-size: 14px;
  font-weight: 600;
  color: orangered;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 2px solid orangered;
  border-radius: 20px;

  :hover {
    border: none;
    color: white;
    background: orangered;
  }
`;

export const DecrementButton = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  font-size: 14px;
  font-weight: 600;
  color: orangered;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 2px solid orangered;
  border-radius: 20px;

  :hover {
    border: none;
    color: white;
    background: orangered;
  }
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
