const validateLoginField = (name, value, formData) => {
  switch (name) {
    case 'email':
      return value === ''
        ? 'Email is required'
        : /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)
        ? ''
        : 'Please enter a valid email address';
    case 'password':
      return value === '' ? 'Password is required' : '';

    default:
      break;
  }
};

const validateLogin = (formData) => {
  let isValid = true;
  const errors = {};
  for (const fieldName in formData.errors) {
    const error = validateLoginField(fieldName, formData[fieldName], formData);
    if (error?.length > 0) {
      isValid = false;
      errors[fieldName] = error;
    }
  }
  return { isValid, errors };
};

export { validateLogin, validateLoginField };
