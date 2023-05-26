import { CardProduct } from 'components/CardProduct/CardProduct';
import { Ul, PageTitle } from './KfcPage.styled';

const products = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    title: 'Mango',
    price: 178,
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
    title: 'Cola',
    price: 58,
    quantity: 2,
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
    title: 'Burger',
    price: 78,
    quantity: 1,
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
    title: 'Kartoshka',
    price: 62,
    quantity: 3,
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
    title: 'Baket',
    price: 239,
    quantity: 1,
  },
  {
    id: 6,
    image: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    title: 'Morochko',
    price: 178,
    quantity: 8,
  },
];

export const KfcPage = () => {
  return (
    <div>
      <PageTitle>KFC</PageTitle>
      <Ul>
        {products.map(({ id, image, title, price }) => {
          return (
            <li key={id}>
              <CardProduct id={id} image={image} title={title} price={price} />
            </li>
          );
        })}
      </Ul>
    </div>
  );
};
