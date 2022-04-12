import { users } from "../../Data/data";

export default function validateInfo(values) {
  let errors = {};

  //user field is empty
  if (!values.username.trim()) {
    errors.username = 'Username is required';
    return errors;
  }

  //get user info
  const userData = users.find((user) => user.username === values.username);
  if (userData) {
    //user passwords don't match
    if (userData.password !== values.password) {
      errors.password = 'Username or Password does not match';
    }
    //user was not found
  } else {
    errors.username = 'Username or Password does not match';
  }
  return errors;

}