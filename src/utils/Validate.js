// Check the length of the string
export const checkLenth = (str, min, max) => {
  return str && str.length >= min && str.length <= max;
};

// Check the email format
export const checkEmail = (str) => {
  return (
    new RegExp(
      '^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$'
    )
  ).test(str);
};

// Check the mobile format
export const checkMobile = (str) => {
  return (
    new RegExp(
      '^1[3-9][0-9]{9}$'
    )
  ).test(str);
};

// Check the decimal length
export const checkDecimalLength = (number, length) => {
  return (
    new RegExp('^[0-9]+(.[0-9]{1,' + length + '})?$')
  ).test(number);
};

// Check the number length
export const checkNumByLength = (str, n) => {
  return (
    new RegExp('^[0-9]{' + n + '}$')
  ).test(str);
};

// Check the password format, 8-32 bits, including numbers, letters, and special characters
export const checkPassword = (str) => {
  return (
    new RegExp(
      '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9~!@#$%^&*_+-=:;<>?,.]{8,32}$'
    )
  ).test(str);

};
