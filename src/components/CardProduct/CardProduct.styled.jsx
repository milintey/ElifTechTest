import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12), 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const CardDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 140px;
`;

export const Image = styled.img`
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  width: 120px;
  height: 140px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin: 0px 0px 20px 0px;
`;

export const ImageDiv = styled.div`
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f1f1f1;
  border-radius: 10px;
  width: 120px;
  height: 140px;
`;

export const ButtonCard = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: orangered;

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
`;
