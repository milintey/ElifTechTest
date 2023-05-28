import { Outlet } from 'react-router-dom';
import { CompanyName } from 'components/CompanyName/CompanyName';
import {
  CompanyNameList,
  ShopContainer,
  ShopMenuContainer,
  Div,
} from './ShopPage.styled';

export const ShopPage = () => {
  return (
    <Div>
      <ShopMenuContainer>
        <CompanyNameList>
          <li>
            <CompanyName name={'KFC'} nav={'kfc'} />
          </li>

          <li>
            <CompanyName name={'McDonald’s'} nav={'mc-donalds'} />
          </li>

          <li>
            <CompanyName name={'Mamamia'} nav={'mamamia'} />
          </li>

          <li>
            <CompanyName name={'Ninja Sushi'} nav={'ninja-sushi'} />
          </li>

          <li>
            <CompanyName name={'The Burger'} nav={'burger'} />
          </li>
        </CompanyNameList>
      </ShopMenuContainer>
      <ShopContainer>
        <Outlet />
      </ShopContainer>
    </Div>
  );
};
