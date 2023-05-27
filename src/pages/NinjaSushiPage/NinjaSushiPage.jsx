import { useEffect, useState } from 'react';

import { CardProduct } from 'components/CardProduct/CardProduct';
import { Ul, PageTitle } from 'pages/KfcPage/KfcPage.styled';
import { fetchProduct } from 'components/operations';

export const NinjaSushiPage = () => {
  const [state, setState] = useState();

  useEffect(() => {
    fetchProduct()
      .then(response => {
        const responseFilter = response.filter(
          item => item.delivery === 'ninja'
        );
        return setState(responseFilter);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <PageTitle>Ninja Sushi</PageTitle>
      {state && (
        <Ul>
          {state.map(({ id, image, title, price }) => {
            return (
              <li key={id}>
                <CardProduct
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                />
              </li>
            );
          })}
        </Ul>
      )}
    </div>
  );
};
