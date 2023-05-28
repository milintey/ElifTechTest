import { Routes, Route } from 'react-router-dom';

import { ShopPage } from 'components/pages/ShopPage/ShopPage';
import { NinjaSushiPage } from 'components/pages/NinjaSushiPage/NinjaSushiPage';
import { BurgerPage } from 'components/pages/BurgerPage/BurgerPage';
import { KfcPage } from 'components/pages/KfcPage/KfcPage';
import { McDonaldsPage } from 'components/pages/McDonald’sPage/McDonald’sPage';
import { ShoppingCartPage } from 'components/pages/ShoppingCartPage/ShoppingCartPage';
import { MamamiaPage } from 'components/pages/MamamiaPage/MamamiaPage';
import { Link, Container, Header } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<ShopPage />}>
          <Route path="mamamia" element={<MamamiaPage />} />
          <Route path="mc-donalds" element={<McDonaldsPage />} />
          <Route path="kfc" element={<KfcPage />} />
          <Route path="burger" element={<BurgerPage />} />
          <Route path="ninja-sushi" element={<NinjaSushiPage />} />
        </Route>
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </Container>
  );
};
