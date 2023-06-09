import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 2000px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 12px; */
  padding: 15px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
