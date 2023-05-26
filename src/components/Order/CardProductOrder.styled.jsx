import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  width: 540px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12), 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const CardDiv = styled.div`
  /* margin-left: 25px; */
  margin-right: 190px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  /* height: 30px; */
  /* width: 160px; */
`;

export const Image = styled.img`
  /* margin-bottom: 25px; */
  /* margin-left: 30px; */
  margin-right: 25px;
  border: 1px solid black;
  border-radius: 10px;
  width: 60px;
  height: 60px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0px;
  margin-bottom: 10px;
  /* display: flex;
  justify-content: center; */
  /* margin: 0px 0px 20px 0px; */
`;

// export const ImageDiv = styled.div`
//   /* margin-bottom: 25px; */
//   /* margin-top: 20px; */
//   /* margin-left: auto;
//   margin-right: auto; */
//   background-color: #f1f1f1;
//   border-radius: 10px;
//   width: 120px;
//   height: 140px;
// `;

export const ButtonCard = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: orangered;
  /* margin-left: 25px; */
  /* margin-right: 30px; */

  background: #fff;
  border: 2px solid orangered;
  border-radius: 20px;

  :hover {
    border: none;
    color: white;
    background: orangered;
  }
`;

export const TextCard = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
`;

export const NumberInput = styled.input`
  display: block;
  background-color: #fff;
  color: black;
  width: 25px;
  height: 25px;
  font-size: 14px;
  outline: none;
  border: 1px solid orangered;
  /* margin-right: 25px; */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonIncrement = styled.button``;

export const ButtonDecrement = styled.button`
  cursor: pointer;
`;

export const QuantityDiv = styled.div`
  display: flex;
`;
