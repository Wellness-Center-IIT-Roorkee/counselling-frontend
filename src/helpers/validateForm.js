const validateForm = async (schema, obj) => {
  const result = { isError: false, valErrors: [] };

  try {
    const isValid = await schema.isValid(obj);
    if (isValid) {
      return result;
    } else {
      await schema.validate(obj, { abortEarly: false });
    }
  } catch (err) {
    if (err.inner) {
      let tempList = [];

      err.inner.forEach(element => {
        tempList.push({
          path: element.path,
          message: element.message,
        });
      });

      result.isError = true;
      result.valErrors = tempList;

      return result;
    }
  }
};

export default validateForm;
