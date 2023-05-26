import { useDispatch } from 'react-redux';
// import { addToCart } from 'redux/cartSlice';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from 'redux/cartSlice';

import {
  CardContainer,
  CardDiv,
  CardTitle,
  NumberInput,
  Image,
  ButtonCard,
  TextCard,
  ButtonDecrement,
  ButtonIncrement,
  QuantityDiv,
} from './CardProductOrder.styled';

export const CardProductOrder = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  const changeInput = event => {
    console.log(event.target.value);
  };

  return (
    <CardContainer>
      <Image src={image} alt="Burger" />

      <CardDiv>
        <CardTitle>{title}</CardTitle>
        <TextCard>{price}грн.</TextCard>
      </CardDiv>
      <QuantityDiv>
        <ButtonDecrement onClick={() => dispatch(decrementQuantity(id))}>
          -
        </ButtonDecrement>
        <NumberInput
          name="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={changeInput}
          disabled
        />
        <ButtonIncrement onClick={() => dispatch(incrementQuantity(id))}>
          +
        </ButtonIncrement>
      </QuantityDiv>
      <ButtonCard onClick={() => dispatch(removeItem(id))}>Delete</ButtonCard>
    </CardContainer>
  );
};
