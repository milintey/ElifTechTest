import { useEffect, useState } from 'react';

import { CardProduct } from 'components/CardProduct/CardProduct';
import { Ul, PageTitle } from 'components/pages/KfcPage/KfcPage.styled';
import { fetchProduct } from 'components/operations';
import { Loader } from 'components/Loader/Loader';

export const McDonaldsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetchProduct('mac-donalds')
      .then(response => {
        return setState(response);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <PageTitle>McDonald’s</PageTitle>
      {isLoading && <Loader />}
      {state && (
        <Ul>
          {state.map(({ _id, image, title, price }) => {
            return (
              <li key={_id}>
                <CardProduct
                  id={_id}
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
