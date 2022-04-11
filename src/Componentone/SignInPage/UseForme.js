import { useState, useEffect } from 'react';
import { users } from '../../Data/data';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: '',
    nickname: '',
    password: '',
    confPassword: '',
    profile: 'https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE='
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
      
       users.push({username: values.username, password: values.password})
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