import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkToMenu = styled(NavLink)`
  /* padding: 8px 16px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: orangered;
  border: 1px solid orangered;
  font-size: 20px;
  font-weight: 500;

  &.active {
    width: 170px;
    height: 45px;
    color: white;
    background-color: orangered;
  }
`;
