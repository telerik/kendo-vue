const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^[0-9 ()+-]+$/;

export const nameValidator = (value) =>
  !value ? 'Name is required' : value.length < 7 ? 'Name should be at least 7 characters long.' : '';
export const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';
export const phoneValidator = (value) =>
  !value ? 'Phone number is required.' : phoneRegex.test(value) ? '' : 'Not a valid phone number.';
export const arrivalDateValidator = (value) =>
  value ? '' : 'Arrival Date is required.';
export const nightsValidator = (value) =>
  value ? '' : 'Number of Nights is required.';
export const guestsValidator = (value) =>
  !value ? 'Number of guests is required' : value < 5 ? '' : 'Maximum 5 guests';
export const termsValidator = (value) =>
  value ? '' : "It's required to agree with Terms and Conditions.";
