import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import {
  InputForm,
  LabelForm,
  ButtonForm,
  Forma,
  ValidationDiv,
} from './OrderForm.styled';
import { clearState } from 'redux/cartSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().required(),
  address: yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

export const OrderForm = () => {
  const zakaz = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    zakaz.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalPrice = getTotal();

  const submitForm = (value, { resetForm }) => {
    const order = { ...value, order: [...zakaz.cart] };
    axios
      .post('https://backend-eliftech.onrender.com/api/orders', order)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    localStorage.setItem('cart', JSON.stringify(zakaz.cart));
    resetForm();
    dispatch(clearState());
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <LabelForm>
          Name
          <InputForm type="text" name="name" />
          <ErrorMessage name="name" component={ValidationDiv} />
        </LabelForm>
        <LabelForm>
          Email
          <InputForm type="email" name="email" />
          <ErrorMessage name="email" component={ValidationDiv} />
        </LabelForm>
        <LabelForm>
          Phone
          <InputForm type="tel" name="phone" />
          <ErrorMessage name="phone" component={ValidationDiv} />
        </LabelForm>
        <LabelForm>
          Address
          <InputForm type="text" name="address" />
          <ErrorMessage name="address" component={ValidationDiv} />
        </LabelForm>
        <p>Total Price: {totalPrice}</p>
        <ButtonForm type="submit">ORDER</ButtonForm>
      </Forma>
    </Formik>
  );
};
