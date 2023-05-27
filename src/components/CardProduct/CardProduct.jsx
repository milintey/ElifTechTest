import { useDispatch } from 'react-redux';

import { addToCart } from 'redux/cartSlice';
import {
  CardContainer,
  CardDiv,
  CardTitle,
  Image,
  ButtonCard,
  TextCard,
} from './CardProduct.styled';

export const CardProduct = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <Image src={image} alt="Burger" />
      <CardTitle>{title}</CardTitle>
      <CardDiv>
        <TextCard>{price}₴</TextCard>
        <ButtonCard
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          Buy
        </ButtonCard>
      </CardDiv>
    </CardContainer>
  );
};
