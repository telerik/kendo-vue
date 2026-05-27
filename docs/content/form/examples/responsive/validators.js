const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^[0-9 ()+-]+$/;

export const nameValidator = (value) =>
  !value ? 'Full name is required.' : value.length < 3 ? 'Name should be at least 3 characters long.' : '';
export const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';
export const phoneValidator = (value) =>
  !value ? 'Phone number is required.' : phoneRegex.test(value) ? '' : 'Not a valid phone number.';
export const requiredValidator = (value) =>
  value ? '' : 'Error: This field is required.';
