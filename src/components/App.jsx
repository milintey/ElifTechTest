import { Routes, Route } from 'react-router-dom';

import { ShopPage } from 'pages/ShopPage/ShopPage';
import { NinjaSushiPage } from 'pages/NinjaSushiPage/NinjaSushiPage';
import { StarBurgerPage } from 'pages/StarBurgerPage/StarBurgerPage';
import { KfcPage } from 'pages/KfcPage/KfcPage';
import { McDonaldsPage } from 'pages/McDonald’sPage/McDonald’sPage';
import { ShoppingCartPage } from 'pages/ShoppingCartPage/ShoppingCartPage';
import { MamamiaPage } from 'pages/MamamiaPage/MamamiaPage';
import { Link, Container, Header } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/shop" element={<ShopPage />}>
          <Route path="mamamia" element={<MamamiaPage />} />
          <Route path="mc-donalds" element={<McDonaldsPage />} />
          <Route path="kfc" element={<KfcPage />} />
          <Route path="star-burger" element={<StarBurgerPage />} />
          <Route path="ninja-sushi" element={<NinjaSushiPage />} />
        </Route>
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </Container>
  );
};
