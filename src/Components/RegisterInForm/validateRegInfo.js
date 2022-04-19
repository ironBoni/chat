import { users } from "../../Data/data";

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  }
  
  var pattern = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).*$/;
  if (!pattern.test(values.password)) {
    errors.password = 'Password must contain both digits and letters';
  }

  if (!values.nickname.trim()) {
    errors.nickname = 'nick name required';
  }
  users.forEach(element => {
    if (element.username === values.username)
      errors.username = 'Username already exsist';
  });



  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confPassword) {
    errors.password2 = 'Password is required';
  } else if (values.confPassword !== values.password) {
    errors.confPassword = 'Passwords do not match';
  }
  return errors;
}