const emailRegex = /\S+@\S+\.\S+/;

export const nameValidator = (value) =>
  !value ? 'Name is required' : value.length < 3 ? 'Name should be at least 3 characters long.' : '';
export const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';
export const passwordValidator = (value) =>
  value && value.length > 8 ? '' : 'Password must be at least 8 symbols.';
