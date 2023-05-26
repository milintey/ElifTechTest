import { FormDiv, OrderDiv } from './ShoppingCartPage.styled';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { Div } from 'pages/ShopPage/ShopPage.styled';
import { CardProductOrder } from 'components/Order/CardProductOrder';
import { useSelector } from 'react-redux';

export const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);

  return (
    <Div>
      <FormDiv>
        <OrderForm />
      </FormDiv>
      <OrderDiv>
        <ul>
          {cart ? (
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
            <li></li>
          )}
        </ul>
      </OrderDiv>
    </Div>
  );
};
