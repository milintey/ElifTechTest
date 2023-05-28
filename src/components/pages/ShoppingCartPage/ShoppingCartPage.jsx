import { useSelector } from 'react-redux';

import { FormDiv, OrderDiv, OrderList } from './ShoppingCartPage.styled';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { Div } from 'components/pages/ShopPage/ShopPage.styled';
import { CardProductOrder } from 'components/CardProductOrder/CardProductOrder';

export const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Div>
      <FormDiv>
        <OrderForm />
      </FormDiv>
      <OrderDiv>
        <OrderList>
          {cart.cart[0] ? (
            cart.cart.map(({ id, image, title, price, quantity }) => {
              return (
                <li key={id}>
                  <CardProductOrder
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    quantity={quantity}
                  />
                </li>
              );
            })
          ) : (
            <p>Сart is empty</p>
          )}
        </OrderList>
      </OrderDiv>
    </Div>
  );
};
