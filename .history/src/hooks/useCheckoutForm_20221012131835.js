import { useState } from 'react';

const useCheckoutForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const isFormValid = Object.entries(formData).every(
    (f) => f[1].isValid === true && f[1].value.length > 0
  );

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
