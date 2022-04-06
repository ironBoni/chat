import { users } from "../../Data/data";

export default function validateInfo(values) {
  let errors = {};

  //user fild is empty
  if (!values.username.trim()) {
    errors.username = 'Username required';
    return errors;
  }

  //get user info
  const userData = users.find((user) => user.username ===  values.username);
   if (userData) {
     //user passwor dont mach
    if (userData.password !== values.password) {
      errors.password = 'Username or Password does not match';
    } 
  //user not found
  }else { 
    errors.username = 'Username or Password does not match';
  }
  return errors;
  
}
