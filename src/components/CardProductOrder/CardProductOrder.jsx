import { useDispatch } from 'react-redux';

import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from 'redux/cartSlice';
import {
  CardContainer,
  CardTitle,
  NumberInput,
  Image,
  ButtonCard,
  TextCard,
  DecrementButton,
  IncrementButton,
  QuantityDiv,
} from './CardProductOrder.styled';

export const CardProductOrder = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <Image src={image} alt="Burger" />
      <CardTitle>{title}</CardTitle>
      <TextCard>{price}₴</TextCard>
      <QuantityDiv>
        <DecrementButton onClick={() => dispatch(decrementQuantity(id))}>
          -
        </DecrementButton>
        <NumberInput
          name="quantity"
          type="number"
          min={1}
          value={quantity}
          disabled
        />
        <IncrementButton onClick={() => dispatch(incrementQuantity(id))}>
          +
        </IncrementButton>
      </QuantityDiv>
      <ButtonCard onClick={() => dispatch(removeItem(id))}>Delete</ButtonCard>
    </CardContainer>
  );
};
