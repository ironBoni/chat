import { useState, useEffect } from 'react';

const useForm = ( submitForm,validate,dataBase) => {
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
    console.log(dataBase)
    setErrors(validate(values,dataBase));
    
    setIsSubmitting(true);
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        dataBase.push(values);
        submitForm();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;