const useCheckoutForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const isFormValid = Object.entries(formData).every(
    (f) => f[1].isValid === true && f[1].value.length > 0
  );
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
  const onBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isValid: value.length <= 0 ? false : true,
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
