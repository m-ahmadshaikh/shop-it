const setOrder = (formData) => {
  return (dispatch) => {
    dispatch({ type: ORDER });
  };
};

const checkout = async (data) => {
  try {
    const res = await databaseClient.post('/orders.json', data);
    return res.data;
  } catch (error) {
    let message = error.response.data.error;
    throw new Error(message);
  }
};

export { checkout };
