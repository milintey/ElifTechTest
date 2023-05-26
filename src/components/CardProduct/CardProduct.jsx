import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cartSlice';

import {
  CardContainer,
  CardDiv,
  CardTitle,
  // ImageDiv,
  Image,
  ButtonCard,
  TextCard,
} from './CardProduct.styled';

export const CardProduct = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  // const productBuy = (image, title, price) => {
  //   console.log(title, image, price);
  // };

  return (
    <CardContainer>
      <Image src={image} alt="Burger" />
      {/* <div> */}
      {/* <ImageDiv></ImageDiv> */}
      <CardTitle>{title}</CardTitle>
      <CardDiv>
        <TextCard>{price}грн.</TextCard>
        {/* <ButtonCard onClick={() => productBuy(image, title, price)}>
          Купить
        </ButtonCard> */}
        <ButtonCard
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          Купить
        </ButtonCard>
      </CardDiv>
      {/* <input name="quantity" type="number" defaultValue={quantity} /> */}
      {/* </div> */}
    </CardContainer>
  );
};
