import { useState } from 'react';
import { validateCheckoutForm } from '../utils/Validators/FormValidator';

const useCheckoutForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const isFormValid = Object.entries(formData).every(
    (f) => f[1].isValid === true && f[1].value !== null
  );

  const onBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isValid: value === null ? false : true,
      },
    }));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isValid: validateCheckoutForm(name, value),
      },
    }));
  };

  return [formData, onChange, onBlur, isFormValid];
};

export default useCheckoutForm;
