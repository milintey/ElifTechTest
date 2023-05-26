import { Outlet } from 'react-router-dom';
import { CompanyName } from 'components/CompanyName/CompanyName';
import {
  CompanyNameList,
  CompanyNameItem,
  ShopContainer,
  ShopMenuContainer,
  Div,
} from './ShopPage.styled';

export const ShopPage = () => {
  return (
    <Div>
      <ShopContainer>
        <CompanyNameList>
          <CompanyNameItem>
            <CompanyName name={'KFC'} nav={'kfc'} />
          </CompanyNameItem>

          <CompanyNameItem>
            <CompanyName name={'McDonald’s'} nav={'mc-donalds'} />
          </CompanyNameItem>

          <CompanyNameItem>
            <CompanyName name={'Mamamia'} nav={'mamamia'} />
          </CompanyNameItem>

          <CompanyNameItem>
            <CompanyName name={'Ninja Sushi'} nav={'ninja-sushi'} />
          </CompanyNameItem>

          <CompanyNameItem>
            <CompanyName name={'Star Burger'} nav={'star-burger'} />
          </CompanyNameItem>
        </CompanyNameList>
      </ShopContainer>
      <ShopMenuContainer>
        <Outlet />
      </ShopMenuContainer>
    </Div>
  );
};
