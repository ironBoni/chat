import { useState, useEffect } from 'react';
import { users } from '../../Data/data';

const useForm = ( submitForm,validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    confPassword: ''
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
    
    setIsSubmitting(true);
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        users.push({username: values.username, password: values.password})
        submitForm();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;