import { users } from "../../Data/data";

export default function validateInfo(values) {
  let errors = {};

  // users.forEach(element => {
   
  //   if (!(element.username === values.username && element.password === values.password)){
  //     errors.username = 'Username or Password does not match';
  //   }else{
  //     console.log("good user")
  //   }
      

  // });
  const userData = users.find((user) => user.username ===  values.username);

 
  if (userData) {
    if (userData.password !== values.password) {
      
      errors.password = 'Username or Password does not match';
    } else{
      console.log("good user");
    }
  } else {
    
    errors.username = 'Username or Password does not match';
  }
  return errors;
  }
