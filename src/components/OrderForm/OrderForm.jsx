// import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';

import { InputForm, LabelForm, ButtonForm } from './OrderForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/operations';
// import * as yup from 'yup';
// import { FormButton, FormInput } from './OrderForm.styled';
// import { contactsState } from 'redux/selectors';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   phone: yup.number().required(),
// });

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

export const OrderForm = () => {
  //   const contactsItem = useSelector(contactsState);
  //   const dispatch = useDispatch();

  const submitForm = (value, { resetForm }) => {
    console.log(value);
    // if (contactsItem.some(cont => cont.name === value.name)) {
    //   alert(`${value.name} is already in contacts`);
    //   return;
    // }
    // dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      // validationSchema={schema}
    >
      <Form autoComplete="off">
        <LabelForm>
          Name
          <InputForm type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </LabelForm>
        <LabelForm>
          Email
          <InputForm type="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </LabelForm>
        <LabelForm>
          Phone
          <InputForm type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />
        </LabelForm>
        <LabelForm>
          Address
          <InputForm type="text" name="address" required />
          <ErrorMessage name="address" component="div" />
        </LabelForm>
        <ButtonForm type="submit">ORDER</ButtonForm>
      </Form>
    </Formik>
  );
  //   return (
  //     <Formik
  //       initialValues={initialValues}
  //       onSubmit={submitForm}
  //       //   validationSchema={schema}
  //     >
  //       <Form autoComplete="off">
  //         <div>
  //           <LabelForm>Name</LabelForm>
  //           <Field type="text" name="name" required />
  //           <ErrorMessage name="name" component="div" />
  //         </div>
  //         <div>
  //           <LabelForm htmlFor="email">Email</LabelForm>
  //           <Field type="email" name="email" required />
  //           <ErrorMessage name="email" component="div" />
  //         </div>
  //         <div>
  //           <LabelForm htmlFor="phone">Phone</LabelForm>
  //           <Field type="tel" name="phone" required />
  //           <ErrorMessage name="phone" component="div" />
  //         </div>
  //         <div>
  //           <LabelForm htmlFor="address">Address</LabelForm>
  //           <Field type="text" name="address" required />
  //           <ErrorMessage name="address" component="div" />
  //         </div>
  //         <button type="submit">SIGN UP</button>
  //       </Form>
  //     </Formik>
  //   );
};
