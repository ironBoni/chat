import { useState, useEffect } from 'react';
import { users } from '../../Data/data';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: '',
    nickname: '',
    profileImage: '/images/default.jpg',
    password: '',
    confPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    if(e.target.name=="Register"){
      
       users.push({username: values.username, nickname: values.nickname, password: values.password, 
      profileImage: values.profileImage})
    }
    setIsSubmitting(true);
    console.log(users)
  };
 

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        
       
        submitForm();
        localStorage.setItem("username", values.username);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;