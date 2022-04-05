export default function validateInfo(values,dataBase) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
  //   for (var i in dataBase) {
  //     if (!(dataBase[i].username === values.username)) {
  //       errors.username = 'Username allredy exsist';
  //     }
  // }
  
    
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