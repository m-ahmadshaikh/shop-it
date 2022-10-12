import * as yup from 'yup';

const authFormValidatingSchema = yup.object().shape({
  email: yup.string().email().required('No email provided.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const validateCheckoutForm = (name, value) => {
  if (name === 'name') {
    if (value.length > 0 && value.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  if (name === 'contact') {
    if (value.length > 0 && value.length < 5) {
      return false;
    } else {
      return true;
    }
  }
  if (name === 'address') {
    if (value.length > 0 && value.length < 8) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};
export { validateCheckoutForm, authFormValidatingSchema };
